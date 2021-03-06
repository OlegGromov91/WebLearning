//import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from "./employee";
import { environment } from "src/environments/environment";


@Injectable({
    providedIn: 'root'
})

export class EmployeeService
{

    private apiServerUrl = environment.apiBaseUrl;

    constructor (private http: HttpClient){}

    public getEmployees(): Observable<Employee[]>
    {
        return this.http.get<Employee[]>
        (`${this.apiServerUrl}/employee/all`);
    }

    public addEmployees(employee: Employee): Observable<Employee>
    {
        return this.http.post<Employee>
        (`${this.apiServerUrl}/employee/add`, employee);
    }

    public updateEmployees(employee: Employee): Observable<Employee[]>
    {
        return this.http.put<Employee[]>
        (`${this.apiServerUrl}/employee/update`, employee);
    }


    public deleteEmployees(employeeId: number): Observable<Employee[]>
    {
        return this.http.delete<Employee[]>
        (`${this.apiServerUrl}/employee/delete/${employeeId}`);
    }

}