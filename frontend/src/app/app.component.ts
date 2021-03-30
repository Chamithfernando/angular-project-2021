import { EmployeeService } from './employee.service';
import { Employee } from './employee';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


//Communication directly with APIS and implemrnt it by using OnInit interface
export class AppComponent implements OnInit {
  public employees: Employee[];

  constructor(private employeeService : EmployeeService){}

  //Implement bu using OnInIt and that will call getEmployee funvtion when ever this is loaded.
  ngOnInit() {
    this.getEmployees();
  }

  public getEmployees(): void {
    this.employeeService.getEmployee().subscribe(
      (response: Employee[]) => {
        this.employees = response;
        console.log(this.employees);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


}
