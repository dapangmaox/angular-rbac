import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
  inject,
} from '@angular/core';

import { UserService } from '../services/user.service';
import { Roles } from '../types';

@Directive({
  selector: '[appIsGrantedRole]',
  standalone: true,
})
export class IsGrantedRoleDirective implements OnInit {
  private userService = inject(UserService);
  private templateRef = inject(TemplateRef);
  private viewContainer = inject(ViewContainerRef);
  private role!: `${Roles}`;

  @Input({ required: true })
  set appIsGrantedRole(role: `${Roles}`) {
    this.role = role;
  }

  ngOnInit() {
    if (this.userService.isGrantedRole(this.role)) {
      this.viewContainer.clear();
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
