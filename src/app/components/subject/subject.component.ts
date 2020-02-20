import { Component, OnInit } from '@angular/core';
import{Subject,from,BehaviorSubject, ReplaySubject, AsyncSubject} from 'rxjs';
import { async } from '@angular/core/testing';
@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    // const subject=new Subject<Number>()    
    // subject.subscribe({
    //   next:(v)=>{console.log('First:'+v)}
    // })
    // subject.subscribe({
    //   next:(v)=>{console.log('Second:'+v)}
    // })
    // subject.next(1);
    // subject.next(2);
    // subject.next(3);
    // subject.next(4);

    // const observable=from([1,2,3,4,5])
    // observable.subscribe(subject)

    //behaviour Subject
    // const behaviourSubject=new BehaviorSubject(2)//Intial value
    // behaviourSubject.subscribe({
    //   next:(x)=>{console.log('First:',x)}
    // })
    // behaviourSubject.next(1)
    // behaviourSubject.next(2)
    // //behaviourSubject.next(3)

    // behaviourSubject.subscribe({
    //   next:(x)=>{console.log('Second:',x)}      
    // })
    // behaviourSubject.next(3)
    
    // ReplaySubject
    // const replaySubject=new ReplaySubject(2);
    // replaySubject.subscribe({
    // next:(x=>{console.log('First:',x)})      
    // })
    // replaySubject.next(1)
    // replaySubject.next(2)
    // replaySubject.next(3)
    // replaySubject.next(4)

    // replaySubject.subscribe({
    //   next:(x)=>{console.log('Second',x)}
    // })
    // replaySubject.next(5)
    
      //asyncSubject 
      const asyncSubject=new AsyncSubject();
       asyncSubject.subscribe({
       next:(x=>{console.log('First:',x)})      
       })
       asyncSubject.next(1)
       asyncSubject.next(2)
       asyncSubject.next(3)
       asyncSubject.next(4)

       asyncSubject.subscribe({
        next:(x=>{console.log('Second:',x)})      
        })
        asyncSubject.next(5)
    }
}
