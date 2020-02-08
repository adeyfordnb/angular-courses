//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

//Components
import { AppComponent } from './app.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { FormComponent } from './components/form/form.component';
import { TodolistComponent } from './components/todolist/todolist.component';

//Services
import { HttpClientModule } from "@angular/common/http";
import { TodoService } from "./services/todo.service";

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    FormComponent,
    TodolistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
