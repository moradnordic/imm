import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://http://127.0.0.1:8000/api'; // URL de ton backend Laravel

  constructor(private http: HttpClient) {}

  // Exemples de requêtes GET et POST

  // GET
  getData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/example`);
  }

  // POST
  postData(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/example`, data);
  }
}
