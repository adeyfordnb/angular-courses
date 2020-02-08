import { Component, OnInit } from '@angular/core';
import { TodoService } from "../../services/todo.service";

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  //Success
  addSuccess:boolean = false;
  showError:boolean = false;

  todos:any;
  todo = {
    completed: false,
    title: ''
  };

  constructor(
    public todoService: TodoService
  ) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe( todos=>{
      this.todos = todos;
      console.log(this.todos);
    }, errors => console.log(errors) );
  }

  addTodo(form){
    this.todoService.addTodo(this.todo).subscribe( todo=>
    {
      this.todos.unshift(todo);
      this.addSuccess = true;
      form.resetForm();

      //Hide success block
      setTimeout( ()=>{
        this.addSuccess = false;
      }, 2000)
    }, error => {

      this.showError = true;
      //Hide error block
      setTimeout( ()=>{
        this.showError = false;
      }, 2000);

    });
  }

  //editTodo
  editTodo(todo){
    this.todoService.editTodo(todo).subscribe( (todo)=>{
      console.log(todo);
    }, error => console.log(error))
  }

  //deleteTodo
  deleteTodo(todo){
    this.todoService.deleteTodo(todo).subscribe( (todo)=>{
      this.todos.splice(todo, 1);
    }, error => console.log(error));
  }

}
