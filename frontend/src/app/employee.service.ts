import { Employee } from './employee';
import { Injectable } from "@angular/core";
import { from, Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn : 'root'
})

export class EmployeeService {
    private apiServerUrl = environment.apiServerUrl;

    constructor(private http : HttpClient){}

    public getEmployee(): Observable<Employee[]>{
        return this.http.get<any>(`${this.apiServerUrl}/empoloyee/all`);
    }

    public addEmployee(employee : Employee): Observable<Employee>{
        return this.http.post<any>(`${this.apiServerUrl}/empoloyee/add`,employee);
    }

    public updateEmployee(employee : Employee): Observable<Employee>{
        return this.http.put<any>(`${this.apiServerUrl}/empoloyee/update/`,employee);
    }

    public deleteEmployee(employeeId : number): Observable<void>{
        return this.http.delete<any>(`${this.apiServerUrl}/empoloyee/delete/${employeeId}`);
    }
}