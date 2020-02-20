import { Component, OnInit,NgModule,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Capability } from 'protractor';
@Component({
  selector: 'app-templete-form',
  templateUrl: './templete-form.component.html',
  styleUrls: ['./templete-form.component.css']
})
export class TempleteFormComponent implements OnInit {

@ViewChild("f",{static:false}) courseForm:NgForm

  constructor() { }
  

  ngOnInit() {
  }

  onSubmit(data:any){

    console.log(data.value.name)
    console.log(data.value.email)
    console.log(data.value.userpassword)
    console.log(data.value.city)
  }

  onClear(){
    this.courseForm.resetForm()
  }
}
