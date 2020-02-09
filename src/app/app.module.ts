//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

//Components
import { AppComponent } from './app.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { FormComponent } from './components/form/form.component';
import { TodolistComponent } from './components/todolist/todolist.component';

//Services
import { TodoService } from "./services/todo.service";
import { SearchuserComponent } from './components/searchuser/searchuser.component';
import { GithubdataService } from "./services/githubdata.service";
import { AlertComponent } from './components/alert/alert.component';
import { AppRoutingModule } from './app-routing.module';
import { InfoComponent } from './components/info/info.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    FormComponent,
    TodolistComponent,
    SearchuserComponent,
    AlertComponent,
    InfoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [TodoService, GithubdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
