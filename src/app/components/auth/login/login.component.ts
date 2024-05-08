import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../auth.service';

import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, HttpClientModule,ToastModule,ButtonModule,RippleModule],
  templateUrl: './login.component.html',
  styleUrl: '../styles.components.scss',
  providers: [HttpClient, AuthService,MessageService],
})
export class LoginComponent {
  username = '';
  password = '';

  authService = inject(AuthService);
  router = inject(Router);

  constructor(private messageService: MessageService) { }

  login(event: Event) {
    event.preventDefault();
    // console.log(`login ${(this.username, this.password)}`);
    this.authService
      .login({
        username: this.username,
        password: this.password,
      })
      .subscribe(() => {
        this.loginSuccessToast()
        setTimeout(() => {
          this.router.navigateByUrl('/dashboard/welcome');
        }, 1000);
      });
  }

  loginSuccessToast() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Logged In Successfully' });
}
}
