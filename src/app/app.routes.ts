import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

import { AdminComponent } from './pages/admin/admin.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { FinanceComponent } from './pages/finance/finance.component';
import { LoginComponent } from './pages/login/login.component';
import { ProjectComponent } from './pages/project/project.component';
import { Roles } from './types';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [authGuard] },
  { path: 'login', component: LoginComponent },
  {
    path: 'project',
    component: ProjectComponent,
    canActivate: [authGuard],
    data: { roles: [Roles.Developer] },
  },
  {
    path: 'employee',
    component: EmployeeComponent,
    canActivate: [authGuard],
    data: { roles: [Roles.HRManager] },
  },
  {
    path: 'finance',
    component: FinanceComponent,
    canActivate: [authGuard],
    data: { roles: [Roles.FinanceManager] },
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [authGuard],
    data: { roles: [Roles.Admin] },
  },
  { path: '**', redirectTo: '' },
];
