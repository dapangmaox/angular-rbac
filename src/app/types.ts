export enum Roles {
  Developer = 'DEVELOPER',
  ProjectManager = 'PROJECT_MANAGER',
  HRManager = 'HR_MANAGER',
  FinanceManager = 'FINANCE_MANAGER',
  Admin = 'ADMIN',
}

export interface Role {
  id: number;
  name: string;
  uid: `${Roles}`;
  extends?: number[]; // ids of another role
  permissions?: string[];
}

export interface User {
  id: number;
  username: string;
  password: string;
  roles: Role[];
}
