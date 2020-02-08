import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  showCase:boolean = false;
  switch:number = 5;
  addClassItalic:boolean = true;
  addClassBold:boolean = true;
  addClasses = {};
  urlImg:string = 'https://picsum.photos/200/300';
  hideText:boolean = true;
  disabledBtn:boolean = true;

  constructor() {

    this.addClasses = {
      italic: this.addClassItalic,
      bold: this.addClassBold
    }

  }

}
