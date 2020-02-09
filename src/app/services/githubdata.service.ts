import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GithubdataService {

  foundedUser: any;

  constructor(
    public http: HttpClient
  ) { }

  findUser(nickname) {
    return this.http.get(`https://api.github.com/users/${nickname}`);
  }

  saveUser(user){
    return this.foundedUser = user;
  }

  getUser(){
    return this.foundedUser;
  }

}
