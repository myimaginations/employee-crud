import { Component } from '@angular/core';
import { EmployeeComponent } from './employee/employee.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EmployeeComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {}
