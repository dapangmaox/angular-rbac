import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { UserService } from '../services/user.service';

export const authGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);

  const userRoles = userService.userRoles;

  if (userRoles && userRoles.length > 0) {
    const { roles } = route.data;

    if (roles) {
      // 使用 Set 存储角色的 UID，以便快速检查是否存在相同的角色
      const roleUidSet = new Set<string>(roles);

      // 遍历用户的角色数组，检查是否有角色的 UID 存在于 roleUidSet 中
      for (const role of userRoles) {
        if (roleUidSet.has(role.uid)) {
          return true;
        }
      }
      router.navigate(['/']);
      return false;
    }

    return true;
  }

  router.navigateByUrl('/login');
  return true;
};
