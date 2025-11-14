import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { EmployeeService, Employee } from '../services/employee.service';
import { StateService } from '../services/state.service';
import { SalaryFormatPipe } from '../pipes/salary-format.pipe';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SalaryFormatPipe
  ],
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[] = [];
  states: any[] = [];

  formModel: Employee = this.resetForm();
  isEditMode = false;
  message = '';

  constructor(
    private readonly employeeService: EmployeeService,
    private readonly stateService: StateService
  ) {}

  ngOnInit(): void {
    this.loadEmployees();
    this.loadStates();
  }

  // Reset form fields
  resetForm(): Employee {
    return {
      name: '',
      email: '',
      position: '',
      salary: 0,
      state: ''
    };
  }

  // Load employees from backend
  loadEmployees() {
    this.employeeService.getAll().subscribe(data => {
      this.employees = data;
    });
  }

  // Load states from backend
  loadStates() {
    this.stateService.getStates().subscribe(data => {
      this.states = data;
    });
  }

  // Add or Update employee
  submit() {
    if (!this.formModel.name || !this.formModel.email) {
      this.message = 'Name and Email are required';
      return;
    }

    if (this.isEditMode) {
      // Update employee
      this.employeeService.update(this.formModel).subscribe(() => {
        this.afterSave('Employee updated successfully');
      });

    } else {
      // Create employee
      this.employeeService.create(this.formModel).subscribe(() => {
        this.afterSave('Employee added successfully');
      });
    }
  }

  // Called after add/update success
  afterSave(msg: string) {
    this.message = msg;

    this.formModel = this.resetForm();
    this.isEditMode = false;
    this.loadEmployees();

    setTimeout(() => (this.message = ''), 2000);
  }

  // Load selected employee into the form (edit mode)
  edit(emp: Employee) {
    this.isEditMode = true;
    this.formModel = { ...emp };
  }

  // Delete employee
  delete(emp: Employee) {
    if (!confirm(`Delete ${emp.name}?`)) return;

    this.employeeService.delete(emp.id!).subscribe(() => {
      this.message = 'Employee deleted';
      this.loadEmployees();

      setTimeout(() => (this.message = ''), 2000);
    });
  }

  // Cancel edit and reset form
  cancel() {
    this.isEditMode = false;
    this.formModel = this.resetForm();
  }
}
