import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GithubdataService } from "../../services/githubdata.service";

@Component({
  selector: 'app-searchuser',
  templateUrl: './searchuser.component.html',
  styleUrls: ['./searchuser.component.css']
})
export class SearchuserComponent implements OnInit {

  @Output() newAppMessage: EventEmitter<any> = new EventEmitter();

  nickname: string;
  user: any;
  searchingMassage: boolean = false;
  showBtn: boolean = false;

  constructor(
    public githubData: GithubdataService
  ) {}

  ngOnInit() {}

  findUser(form){

    this.searchingMassage = true;

    //find user github API
    this.githubData.findUser(this.nickname).subscribe( user=>{
      this.showBtn = true;
      this.user = user;
      this.githubData.saveUser(user);//save user in githubData
      form.resetForm();
      this.searchingMassage = false;//hide message 'Please wait...'
      this.newAppMessage.emit({
        message: `We found user: ${this.user.login}`,
        error: false
      })}
    , error => {
      this.searchingMassage = false;
        console.log(error);
        this.newAppMessage.emit({
          message: `User: ${this.nickname} not found!`,
          error: true
        })
    });
  }

}
