import { Component, OnInit, NgModule, ViewChild } from '@angular/core';
import { NgForm, FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Capability } from 'protractor';

@Component({
  selector: 'app-reactive-form-array',
  templateUrl: './reactive-form-array.component.html',
  styleUrls: ['./reactive-form-array.component.css']
})
export class ReactiveFormArrayComponent implements OnInit {
  @ViewChild("f", { static: false }) courseForm: NgForm

  arr: FormArray;
  formGroup: FormGroup;

  constructor(private fb: FormBuilder) { }


  ngOnInit() {
    this.formGroup = this.fb.group({
      arr: this.fb.array([
        this.createItem()
      ])
    });
  }

  createItem() {
    return this.fb.group({
      name: ['', Validators.required],
      email: [''],
      username: [''],
      password: [''],
      confirmpassword: ['']
    })
  }

  addItem() {
    this.arr = this.formGroup.get('arr') as FormArray
    this.arr.push(this.createItem())
  }


  onSubmit(data: any) {

    console.log(data.value.name)
    console.log(data.value.email)
    console.log(data.value.userpassword)
    console.log(data.value.city)
  }

  onClear() {
    this.courseForm.resetForm()
  }
}
