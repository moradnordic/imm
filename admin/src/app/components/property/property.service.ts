import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private apiUrl = 'http://localhost:8000/api/properties';

  constructor(private http: HttpClient) {}

  // ajout
addProperty(propertyData: FormData): Observable<any> {
    return this.http.post<any>(this.apiUrl, propertyData);
}

  // recuperer data
  getProperties(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

    // Suppression
  deleteProperty(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // modification
  updateProperty(id: number, property: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, property);
  }
}
