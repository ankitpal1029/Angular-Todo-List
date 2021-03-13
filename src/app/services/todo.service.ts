import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Todo} from '../models/Todos';
import {Observable} from 'rxjs';


const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}
@Injectable({
  providedIn: 'root'
})
export class TodoService {
    todosUrl = 'https://jsonplaceholder.typicode.com/todos';
    limitTodos = '?_limit=5';

  constructor(private http:HttpClient) { }


  getTodos():Observable<Todo[]>{
      return this.http.get<Todo[]>(`${this.todosUrl}${this.limitTodos}`);
  }

  // Toggle completed
  toggleCompleted(todo: Todo):Observable<any>{
      const url = `${this.todosUrl}/${todo.id}`;
      return this.http.put(url, todo, httpOptions);
  }
}
