import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:8000/api/tasks';  // URL de l'API Laravel

  constructor(private http: HttpClient) { }

  // Méthode pour obtenir toutes les tâches
  getTasks(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Méthode pour ajouter une nouvelle tâche
  addTask(task: any): Observable<any> {
    return this.http.post(this.apiUrl, task);
  }

  // Méthode pour mettre à jour une tâche
  updateTask(id: number, task: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, task);
  }

  // Méthode pour supprimer une tâche
  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
