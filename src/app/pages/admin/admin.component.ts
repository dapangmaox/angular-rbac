import { Component } from '@angular/core';
import { IsGrantedDirective } from '../../directives/is-granted.directive';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [IsGrantedDirective],
  templateUrl: './admin.component.html',
})
export class AdminComponent {}
