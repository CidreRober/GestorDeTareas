import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { TaskModel } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  apiUrl: string = 'http://localhost:8080';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }

  // Create Task
  createTask(task: TaskModel): Observable<any> {
    let API_URL = `${this.apiUrl}/addtask`;
    return this.http.post(API_URL, task)
      .pipe(
        catchError(this.error)
      )
  }
  
  // Search all Tasks
  getAllTasks(): Observable<any> {
    return this.http.get(`${this.apiUrl}/gettasklist`);
  }

  // Update Task
  updateTask(id: number, data: any): Observable<any> {
    let API_URL = `${this.apiUrl}/updatetaskbyid/${id}`;
    return this.http.put(API_URL, data, { headers: this.headers }).pipe(
      catchError(this.error)
    )
  }
  // Delete Task
  deleteTask(id: number): Observable<any> {
    var API_URL = `${this.apiUrl}/deletetaskbyid/${id}`;
    return this.http.delete(API_URL).pipe(
      catchError(this.error)
    )
  }
  // Handle Errors 
  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}