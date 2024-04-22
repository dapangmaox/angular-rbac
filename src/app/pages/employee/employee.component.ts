import { Component } from '@angular/core';
import { IsGrantedDirective } from '../../directives/is-granted.directive';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [IsGrantedDirective],
  templateUrl: './employee.component.html',
})
export class EmployeeComponent {}
