import { Component } from '@angular/core';
import { AuthenticationRequest } from 'src/app/services/authentication/authentication.model';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email!: string;
  password!: string;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  login() {
    const request: AuthenticationRequest = {
      email: this.email,
      password: this.password,
    };

    this.authService.authenticate(request).subscribe(
      (response) => {
        // Store access token and refresh token in local storage
        localStorage.setItem('accessToken', response.access_token);
        localStorage.setItem('refreshToken', response.refresh_token);

        console.log(localStorage.getItem('accessToken'));
        console.log(localStorage.getItem('refreshToken'));

        // Redirect or perform other actions upon successful login
        this.router.navigate(['/home']);
      },
      (error) => {
        // Handle login error
      }
    );
  }

  goToSignup() {
    this.router.navigate(['/signup']);
  }
}
