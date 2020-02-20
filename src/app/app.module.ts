import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { DemoComponent } from './component/demo/demo.component';
import { Demo1Component } from './component/demo1/demo1.component';
import { FirstPipePipe } from './pipes/first-pipe.pipe';
import { SecongPipePipe } from './pipes/secong-pipe.pipe';
import { LoginComponent } from './Login/login/login.component';
import { TimerComponent } from './component/timer/timer.component';
import { ObservableComponent } from './component/observable/observable.component';
import { LifecycleComponent } from './component/lifecycle/lifecycle.component';
import { SubjectComponent } from './components/subject/subject.component';
import { TempleteFormComponent } from './component/templete-form/templete-form.component';
import { ReactiveFormComponent } from './component/reactive-form/reactive-form.component';
import { ReactFormComponent } from './component/react-form/react-form.component';
import {CustomvalidationService} from './services/customvalidation.service';
import { ReactiveFormArrayComponent } from './component/reactive-form-array/reactive-form-array.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Demo1Component,
    FirstPipePipe,
    SecongPipePipe,
    LoginComponent,
    TimerComponent,
    ObservableComponent,
    LifecycleComponent,
    SubjectComponent,
    TempleteFormComponent,
    ReactiveFormComponent,
    ReactFormComponent,
    ReactiveFormArrayComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
