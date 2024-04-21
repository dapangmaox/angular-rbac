import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
  inject,
} from '@angular/core';

import { UserService } from '../services/user.service';

@Directive({
  selector: '[appIsGranted]',
  standalone: true,
})
export class IsGrantedDirective implements OnInit {
  private userService = inject(UserService);
  private templateRef = inject(TemplateRef);
  private viewContainer = inject(ViewContainerRef);
  private permission!: string;

  @Input({ required: true })
  set appIsGranted(permission: string) {
    this.permission = permission;
  }

  ngOnInit() {
    if (this.userService.isGrantedPermission(this.permission)) {
      this.viewContainer.clear();
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
