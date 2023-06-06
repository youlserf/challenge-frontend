import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TipoContribuyente } from './contribuyente.model';

@Injectable()
export class TipoContribuyenteService {
  private baseUrl = 'http://localhost:8080/api/tipo-contribuyente';

  constructor(private http: HttpClient) {}

  getAllTipoContribuyentes(): Observable<TipoContribuyente[]> {
    const accessToken = localStorage.getItem('accessToken');
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${accessToken}`
    );

    return this.http
      .get<TipoContribuyente[]>(this.baseUrl, { headers })
      .pipe(catchError(this.handleError));
  }

  getTipoContribuyenteById(id: number): Observable<TipoContribuyente> {
    const accessToken = localStorage.getItem('accessToken');
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${accessToken}`
    );

    return this.http
      .get<TipoContribuyente>(`${this.baseUrl}/${id}`, { headers })
      .pipe(catchError(this.handleError));
  }

  createTipoContribuyente(
    tipoContribuyente: TipoContribuyente
  ): Observable<TipoContribuyente> {
    const accessToken = localStorage.getItem('accessToken');
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${accessToken}`
    );

    return this.http
      .post<TipoContribuyente>(this.baseUrl, tipoContribuyente, { headers })
      .pipe(catchError(this.handleError));
  }

  updateTipoContribuyente(
    id: number,
    tipoContribuyente: TipoContribuyente
  ): Observable<TipoContribuyente> {
    const accessToken = localStorage.getItem('accessToken');
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${accessToken}`
    );

    return this.http
      .put<TipoContribuyente>(`${this.baseUrl}/${id}`, tipoContribuyente, {
        headers,
      })
      .pipe(catchError(this.handleError));
  }

  deleteTipoContribuyente(id: number): Observable<any> {
    const accessToken = localStorage.getItem('accessToken');
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${accessToken}`
    );

    return this.http
      .delete<any>(`${this.baseUrl}/${id}`, { headers })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    // You can implement your own error handling logic here
    console.error('An error occurred:', error);
    return throwError('Something went wrong; please try again later.');
  }
}
