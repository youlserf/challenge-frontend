import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoDocumento } from './document.model';

@Injectable({
  providedIn: 'root',
})
export class TipoDocumentoService {
  private baseUrl = 'http://localhost:8080/api/tipo-documento';

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const accessToken = localStorage.getItem('accessToken');
    return new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);
  }

  getAllTipoDocumentos(): Observable<TipoDocumento[]> {
    const headers = this.getHeaders();
    return this.http.get<TipoDocumento[]>(this.baseUrl, { headers });
  }

  getTipoDocumentoById(id: number): Observable<TipoDocumento> {
    const headers = this.getHeaders();
    return this.http.get<TipoDocumento>(`${this.baseUrl}/${id}`, { headers });
  }

  createTipoDocumento(tipoDocumento: TipoDocumento): Observable<TipoDocumento> {
    const headers = this.getHeaders();
    return this.http.post<TipoDocumento>(this.baseUrl, tipoDocumento, {
      headers,
    });
  }

  updateTipoDocumento(
    id: number,
    tipoDocumento: TipoDocumento
  ): Observable<TipoDocumento> {
    const headers = this.getHeaders();
    return this.http.put<TipoDocumento>(
      `${this.baseUrl}/${id}`,
      tipoDocumento,
      { headers }
    );
  }

  deleteTipoDocumento(id: number): Observable<void> {
    const headers = this.getHeaders();
    return this.http.delete<void>(`${this.baseUrl}/${id}`, { headers });
  }
}
