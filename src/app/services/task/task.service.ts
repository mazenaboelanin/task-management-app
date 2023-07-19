import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl = 'http://localhost:5000';

  constructor(
    private http: HttpClient
  ) { }

  getTasks(): Observable<any>{
    return this.http.get(`${this.baseUrl}/tasks`);
  }

}
