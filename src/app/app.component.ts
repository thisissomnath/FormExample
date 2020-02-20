import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Hooks';
 public number: number=123456;
 nstring="somnathame :";
  
  get counter(){
    return this.number;
  }

  set counter(value){
    this.number=value;
  }
  increment(){
    this.counter++;
  }
  decrement(){
    this.counter--;
  }
}
