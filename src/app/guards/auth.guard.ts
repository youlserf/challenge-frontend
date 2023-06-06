import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private http: HttpClient) {}

  canActivate(): Observable<boolean> {
    return this.isAuthenticated().pipe(
      catchError(() => {
        this.router.navigate(['/login']);
        console.log('Authent');
        return of(false);
      })
    );
  }

  isAuthenticated(): Observable<boolean> {
    const accessToken = localStorage.getItem('accessToken');
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${accessToken}`
    );
    if (accessToken) {
      return this.http
        .get<boolean>('http://localhost:8080/api/tipo-contribuyente', {
          headers,
        })
        .pipe(
          catchError((error) => {
            console.error('Authentication request error:', error);
            return of(false);
          })
        );
    } else {
      return of(false);
    }
  }
}
