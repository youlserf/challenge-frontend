import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EntidadService {
  private baseUrl = 'http://localhost:8080/api/entidad';

  constructor(private http: HttpClient) {}

  getAllEntities(): Observable<any[]> {
    const accessToken = localStorage.getItem('accessToken');
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${accessToken}`
    );

    return this.http.get<any[]>(this.baseUrl, { headers });
  }

  getEntityById(id: number): Observable<any> {
    const accessToken = localStorage.getItem('accessToken');
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${accessToken}`
    );

    return this.http.get<any>(`${this.baseUrl}/${id}`, { headers });
  }

  createEntity(entity: any): Observable<any> {
    const accessToken = localStorage.getItem('accessToken');
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${accessToken}`
    );

    return this.http.post<any>(this.baseUrl, entity, { headers });
  }

  updateEntity(id: number, entity: any): Observable<any> {
    const accessToken = localStorage.getItem('accessToken');
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${accessToken}`
    );

    return this.http.put<any>(`${this.baseUrl}/${id}`, entity, { headers });
  }

  deleteEntity(id: number): Observable<any> {
    const accessToken = localStorage.getItem('accessToken');
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${accessToken}`
    );

    return this.http.delete<any>(`${this.baseUrl}/${id}`, { headers });
  }
}
