import {  HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './employee.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],

  //Servicers configured in entire angular application eg :- EmployeeService
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
