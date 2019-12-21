import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ceb',
  templateUrl: './ceb.component.html',
  styles: []
})
export class CebComponent implements OnInit {

// 1.Create an obj for EventEmitter Class
// 2.Create a Custom Event in Child comp
  @Output() reportGenerated = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log('Inside Contructor');
  }

  sendDataToParent(){
    // 3. Emitting the custom event with data to the parent comp
    this. reportGenerated.emit('Hi from child component');
  }



}
