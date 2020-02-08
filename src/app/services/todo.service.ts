import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    public http: HttpClient
  ) { }

  getTodos(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  };

  addTodo(todo){
    return this.http.post('https://jsonplaceholder.typicode.com/todos', todo);
  }

  editTodo(todo){
    return this.http.put('https://jsonplaceholder.typicode.com/todos/1', todo);
  }

  deleteTodo(todo){
    return this.http.delete('https://jsonplaceholder.typicode.com/todos/1', todo);
  }

}
