import { Component, OnInit } from '@angular/core';
import { GithubdataService } from "../../services/githubdata.service";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  foundedUser: any;

  constructor(
    public githubData: GithubdataService
  ) { }

  ngOnInit() {
    this.foundedUser = this.githubData.getUser();
    console.log(this.foundedUser);
  }

}
