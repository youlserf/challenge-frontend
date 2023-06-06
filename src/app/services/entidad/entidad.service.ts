import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entity } from './entidad.model'; // Import the interface

@Injectable({
  providedIn: 'root',
})
export class EntidadService {
  private baseUrl = 'http://localhost:8080/api/entidad';

  constructor(private http: HttpClient) {}

  getAllEntities(): Observable<Entity[]> {
    const accessToken = localStorage.getItem('accessToken');
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${accessToken}`
    );

    return this.http.get<Entity[]>(this.baseUrl, { headers });
  }

  getEntityById(id: number): Observable<Entity> {
    const accessToken = localStorage.getItem('accessToken');
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${accessToken}`
    );

    return this.http.get<Entity>(`${this.baseUrl}/${id}`, { headers });
  }

  createEntity(entity: Entity): Observable<Entity> {
    const accessToken = localStorage.getItem('accessToken');
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${accessToken}`
    );

    return this.http.post<Entity>(this.baseUrl, entity, { headers });
  }

  updateEntity(id: number, entity: Entity): Observable<Entity> {
    const accessToken = localStorage.getItem('accessToken');
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${accessToken}`
    );

    return this.http.put<Entity>(`${this.baseUrl}/${id}`, entity, { headers });
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
