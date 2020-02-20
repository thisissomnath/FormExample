import { Component, OnInit } from '@angular/core';
//import{ timer,of,observable} from "rxjs"
import { from,timer,of,Observable } from 'rxjs';
@Component({
  selector: 'observableapp-',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  constructor() {
    const sequence=new Observable(this.sequenceSubcriber)
    sequence.subscribe({
      next(num) {console.log(num);},
      complete() { console.log('finish squence');}
    });
   }
   sequenceSubcriber(observer){
     observer.next(1);
     observer.next(2);
     observer.next(3);
     observer.complete();
     return{unsubscribe(){}}
   }

  ngOnInit() {
  }

}
