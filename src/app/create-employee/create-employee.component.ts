import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [EmployeeService],
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent {

}
