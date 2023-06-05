import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TipoContribuyenteService {
  private baseUrl = 'http://localhost:8080/api/tipo-contribuyente';

  constructor(private http: HttpClient) {}

  getAllTipoContribuyentes(): Observable<any[]> {
    const accessToken = localStorage.getItem('accessToken');
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${accessToken}`
    );

    return this.http.get<any[]>(this.baseUrl, { headers });
  }

  getTipoContribuyenteById(id: number): Observable<any> {
    const accessToken = localStorage.getItem('accessToken');
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${accessToken}`
    );

    return this.http.get<any>(`${this.baseUrl}/${id}`, { headers });
  }

  createTipoContribuyente(tipoContribuyente: any): Observable<any> {
    const accessToken = localStorage.getItem('accessToken');
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${accessToken}`
    );

    return this.http.post<any>(this.baseUrl, tipoContribuyente, { headers });
  }

  updateTipoContribuyente(id: number, tipoContribuyente: any): Observable<any> {
    const accessToken = localStorage.getItem('accessToken');
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${accessToken}`
    );

    return this.http.put<any>(`${this.baseUrl}/${id}`, tipoContribuyente, {
      headers,
    });
  }

  deleteTipoContribuyente(id: number): Observable<any> {
    const accessToken = localStorage.getItem('accessToken');
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${accessToken}`
    );

    return this.http.delete<any>(`${this.baseUrl}/${id}`, { headers });
  }
}
