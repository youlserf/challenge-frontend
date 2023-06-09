import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterRequest } from 'src/app/services/authentication/authentication.model';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  firstname!: string;
  lastname!: string;
  email!: string;
  password!: string;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  register() {
    const request: RegisterRequest = {
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      password: this.password,
    };

    this.authService.register(request).subscribe(
      (response) => {
        localStorage.setItem('accessToken', response.access_token);
        localStorage.setItem('refreshToken', response.refresh_token);

        console.log(localStorage.getItem('accessToken'));
        console.log(localStorage.getItem('refreshToken'));

        // Handle successful registration, such as showing a success message or redirecting to the login page
        this.router.navigate(['/entity']);
      },
      (error) => {
        // Handle registration error, such as displaying an error message
      }
    );
  }
}
