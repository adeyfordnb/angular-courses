import { Component } from '@angular/core';

//Interface
interface User {
  name:string,
  email:string
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent{

  user:User = {
    name: '',
    email: ''
  };

  users:User[] = [];

  constructor() { }

  onSubmit(form){
    this.users.push({
      name: this.user.name,
      email: this.user.email
    });

    form.resetForm();
  }

  removeUser(i){
    this.users.splice(i, 1);
  }

}
