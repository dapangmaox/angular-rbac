import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

import { Role, Roles, User } from '../types';
import { RoleList } from '../data';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient);

  private userSubject: BehaviorSubject<User | null>;
  public user: Observable<User | null>;
  public userRoles: Role[] = [];

  constructor() {
    this.userSubject = new BehaviorSubject<User | null>(null);
    this.user = this.userSubject.asObservable();
  }

  public get userValue() {
    return this.userSubject.value;
  }

  authenticate(username: string, password: string) {
    return this.http.post<User>('/authenticate', { username, password }).pipe(
      map((user) => {
        this.userSubject.next(user);
        this.userRoles = this.getAllRoles(user);
        return user;
      })
    );
  }

  isGrantedRole(role: `${Roles}`) {
    return this.userRoles.some((r) => r.uid === role);
  }

  isGrantedPermission(permission: string) {
    return this.userRoles.some((role) =>
      role.permissions?.includes(permission)
    );
  }

  private getAllRoles(user: User): Role[] {
    // 使用Set来存储所有角色，确保角色不重复
    const allRoles = new Set<Role>();

    // 递归函数来获取角色及其继承角色
    function getRoles(role: Role) {
      // 将当前角色添加到allRoles
      allRoles.add(role);

      // 如果角色有继承的角色，则递归获取继承角色
      if (role.extends && role.extends.length > 0) {
        role.extends.forEach((roleId) => {
          const extendedRole = RoleList.find((r) => r.id === roleId);
          if (extendedRole) {
            getRoles(extendedRole);
          }
        });
      }
    }

    // 遍历用户的角色，获取所有角色
    user.roles.forEach((role) => {
      getRoles(role);
    });

    // 将Set转换为数组并返回
    return Array.from(allRoles);
  }
}
