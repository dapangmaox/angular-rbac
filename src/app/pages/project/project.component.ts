import { Component } from '@angular/core';
import { IsGrantedDirective } from '../../directives/is-granted.directive';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [IsGrantedDirective],
  templateUrl: './project.component.html',
})
export class ProjectComponent {}
