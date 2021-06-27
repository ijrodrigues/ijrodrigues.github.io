import { Injectable } from '@angular/core';
import {Todo} from "./Todo";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  apiUrl: string = 'http://localhost:8080/todos'

  constructor(private http: HttpClient) { }

  create(todo : Todo) : Observable<Todo>{
    return this.http.post<Todo>(this.apiUrl, todo)
  }

  switchTodoStatus(id : string) : Observable<Todo>{
    return this.http.put<Todo>(`${this.apiUrl}/${id}/switch-status`, {})
  }

  delete(id : string) : Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }

  getAll() : Observable<Todo[]>{
    return this.http.get<Todo[]>(this.apiUrl)
  }
}
