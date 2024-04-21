import { Role, Roles, User } from './types';

export const RoleList: Role[] = [
  {
    id: 1,
    name: 'Developer',
    uid: 'DEVELOPER',
    permissions: ['view_project', 'update_project'],
  },
  {
    id: 2,
    name: 'Project Manager',
    uid: 'PROJECT_MANAGER',
    extends: [1],
    permissions: ['assign_task'],
  },
  {
    id: 3,
    name: 'HR Manager',
    uid: 'HR_MANAGER',
    permissions: ['view_employee', 'update_employee'],
  },
  {
    id: 4,
    name: 'Finance Manager',
    uid: 'FINANCE_MANAGER',
    permissions: ['view_finance', 'update_finance'],
  },
  {
    id: 5,
    name: 'Admin',
    uid: 'ADMIN',
    extends: [2, 3, 4],
    permissions: [
      'add_user',
      'remove_user',
      'add_role',
      'remove_role',
      'assign_role',
    ],
  },
];

export const users: User[] = [
  {
    id: 1,
    username: 'developer',
    password: 'developer',
    roles: [RoleList[0]],
  },
  {
    id: 2,
    username: 'project_manager',
    password: 'project_manager',
    roles: [RoleList[1]],
  },
  {
    id: 3,
    username: 'hr_manager',
    password: 'hr_manager',
    roles: [RoleList[2]],
  },
  {
    id: 4,
    username: 'finance_manager',
    password: 'finance_manager',
    roles: [RoleList[3]],
  },
  {
    id: 5,
    username: 'admin',
    password: 'admin',
    roles: [RoleList[4]],
  },
  {
    id: 6,
    username: 'pm_and_hr',
    password: 'pm_and_hr',
    roles: [RoleList[1], RoleList[2]],
  },
];
