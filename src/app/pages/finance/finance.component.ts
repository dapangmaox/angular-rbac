import { Component } from '@angular/core';
import { IsGrantedDirective } from '../../directives/is-granted.directive';

@Component({
  selector: 'app-finance',
  standalone: true,
  imports: [IsGrantedDirective],
  templateUrl: './finance.component.html',
})
export class FinanceComponent {}
