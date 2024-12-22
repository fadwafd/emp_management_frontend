import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [EmployeeService],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
    employees! : Employee[];

    constructor (private employeeService: EmployeeService) {}

    ngOnInit(): void {
        this.getEmployees();
    }

    private getEmployees(){
      this.employeeService.getEmployeeList().subscribe(data => {
        this.employees = data;
       });
    }
}
