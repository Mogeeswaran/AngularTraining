import { Component, ViewChild, OnInit } from '@angular/core';
import { CebComponent } from './ceb/ceb.component';

// @Component is 'Decorator' connects the files, which is a function
@Component({
  selector: 'app-root',                // exposed as selector - *
  templateUrl: './app.component.html', // should have only one html - *
  styleUrls: ['./app.component.css']   // css can be many also it is optional
})
export class AppComponent {
  // ts
  // title = 'contact-manager';
  appName = 'contact-manager';
  isLoggedIn = true;
  exp = 13;
  skillsList: string[] = [
    'html','css','ts'
  ];

  getExp(): string {
    return `${this.exp} years`;
  }

  devName = 'contact-manager app';

  courseName ='angular';

  dirName;

  onBtnClick(){
    alert("Event binding");
    console.log(event);
  }

  getAge(){
    return 70;
  }

  onReportGeneratedHandler(event){
    console.log('Inside on ReportGeneratedHandelr');
    console.log(event);
    this.dirName =event;    
  }

  // @ViewChild Related 
  @ViewChild(CebComponent, { static: true}) cebData;

  constructor(){
    console.log('constructor');
  }

  ngOnInit(){
    console.log('noOnInit');
    console.log(this.cebData);
  }
}
