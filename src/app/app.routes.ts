import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';

export const routes: Routes = [
    { path: 'about', component: EmployeeListComponent },
    { path: '', redirectTo: 'about', pathMatch: 'full'}, 
    { path: 'create-employee', component: CreateEmployeeComponent},
];
export const appRouter = provideRouter(routes);

