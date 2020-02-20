import { Component, OnInit,Input,OnChanges,SimpleChange,SimpleChanges, ɵɵNgOnChangesFeature } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit,OnChanges {
  // @Input() myNewNumber:number;
  private mynumber:number;
 @Input() mynumber2:string;
  constructor() { }
  @Input()
    set myNewNumber(number:number){
      this.mynumber=number;
  }
  get myNewNumber(){
    return this.mynumber;
  }
  // this execute every time when you are compiling or executing
  ngOnChanges(Changes:SimpleChanges){
    const newNumberChange:SimpleChange=Changes.myNewNumber;
    console.log('prevoius value-(ng on changes)',newNumberChange.previousValue);
    console.log('current value-(ng on changes)',newNumberChange.currentValue);

  }
// this execute only once 
  ngOnInit() {
    debugger;
    console.log('ngOnInit value',this.myNewNumber);
  }

}
