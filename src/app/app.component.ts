import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { IsGrantedRoleDirective } from './directives/is-granted-role.directive';
import { UserService } from './services/user.service';
import { Roles, User } from './types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IsGrantedRoleDirective, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private userService = inject(UserService);

  user?: User | null;
  roles = Roles;

  ngOnInit(): void {
    this.userService.user.subscribe((x) => (this.user = x));
  }
}
