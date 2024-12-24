import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  providers: [EmployeeService],
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent implements OnInit{
    
  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit(): void {   
  }

  saveEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe( data =>{
     console.log(data);
     this.goToEmployeeList();
    },
     error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/about']);
  }

  onSubmit() {
    console.log(this.employee);
    this.saveEmployee();
  }
}
