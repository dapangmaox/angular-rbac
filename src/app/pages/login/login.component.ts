import { Component, OnInit, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  private userService = inject(UserService);
  private router = inject(Router);

  submitted = false;
  error = '';

  loginForm!: FormGroup;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl(''),
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }
    this.userService
      .authenticate(
        this.loginForm.get('username')?.value,
        this.loginForm.get('password')?.value
      )
      .subscribe({
        next: () => {
          this.router.navigateByUrl('/');
        },
        error: (error) => {
          this.error = error;
        },
      });
  }
}
