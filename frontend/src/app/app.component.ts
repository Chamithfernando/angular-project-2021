import { EmployeeService } from './employee.service';
import { Employee } from './employee';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Button } from 'protractor';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


//Communication directly with APIS and implemrnt it by using OnInit interface
export class AppComponent implements OnInit {
  public employees: Employee[];
  public updateEmployee: Employee;
  public deleteEmployee: Employee;

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

  public onOpenModal(employee: Employee, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addEmployeeModal');
    }
    if (mode === 'edit') {
      this.updateEmployee = employee;
      button.setAttribute('data-target', '#updateEmployeeModal');
    }
    if (mode === 'delete') {
      this.deleteEmployee = employee;
      button.setAttribute('data-target', '#deleteEmployeeModal');
    }
    container.appendChild(button);
    button.click();
  }

  public onAddEmployee(addFrom : NgForm):void {
    document.getElementById('add-employee-form').click();
    this.employeeService.addEmployee(addFrom.value).subscribe(
      (response: Employee) => {
        console.log(response);
        this.getEmployees();
        addFrom.reset();
      }, 
      (error: HttpErrorResponse) => {
        alert(error.message);
      } 
      
    );
  }

  public onUpdateEmployee(employee : Employee):void {
   
    this.employeeService.updateEmployee(employee).subscribe(
      (response: Employee) => {
        console.log(response);
        this.getEmployees();
      }, 
      (error: HttpErrorResponse) => {
        alert(error.message);
      } 
      
    );
  }

  //Deieting employees from the list

  public onDeleteEmployee(employeeId : number):void {
   
    this.employeeService.deleteEmployee(employeeId).subscribe(
      (response: void) => {
        console.log(response);
        this.getEmployees();
      }, 
      (error: HttpErrorResponse) => {
        alert(error.message);
      } 
      
    );
  }

  /*
  public searchEmployees(key: string):void {
    console.log(key);
    const result : Employee[] = [];
    for (const employee of this.employees) {
      if (employee.name.toLowerCase().indexOf(key.toLowerCase())  !== -1
        || employee.email.toLowerCase().indexOf(key.toLowerCase())  !== -1
        || employee.phone.toLowerCase().indexOf(key.toLowerCase())  !== -1
        || employee.jobtitle.toLowerCase().indexOf(key.toLowerCase())  !== -1) {
        result.push(employee);
      }
    }

    this.employees = result;
    if (result.length === 0 || !key) {
      this.getEmployees();
    }
  }
  */

//Searching Employees from the list

 public searchEmployees(key: string): void {
  console.log(key);
  const results: Employee[] = [];
  for (const employee of this.employees) {
    if (employee.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
    || employee.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
    || employee.phone.toLowerCase().indexOf(key.toLowerCase()) !== -1
    || employee.jobtitle.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
      results.push(employee);
    }
    this.employees = results;
  }
  
  if (results.length === 0 || !key) {
    this.getEmployees();
  }
}

}
