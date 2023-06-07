import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private http: HttpClient) {}

  canActivate(): Observable<boolean> {
    const accessToken = localStorage.getItem('accessToken');
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${accessToken}`
    );

    if (accessToken) {
      return this.http
        .get<any>('http://localhost:8080/api/tipo-contribuyente', { headers })
        .pipe(
          catchError(() => {
            this.router.navigate(['/login']);
            return of(false);
          })
        );
    } else {
      this.router.navigate(['/login']);
      return of(false);
    }
  }
}
