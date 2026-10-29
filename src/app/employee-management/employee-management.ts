import { Component, inject } from '@angular/core';

import { TableModule } from 'primeng/table';

import { Employee } from './model';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-employee-management',
  standalone: true,
  imports: [TableModule,ButtonModule,InputTextModule,SelectModule,FormsModule,ReactiveFormsModule,ToastModule,DialogModule],
  providers:[MessageService],
  templateUrl: './employee-management.html',
  styleUrl: './employee-management.css'
})
export class EmployeeManagement {
// table-data
  employees: Employee[] = [
    {
      id: 101,
      name: 'Rahul Sharma',
      email: 'rahul@gmail.com',
      department: 'Engineering',
      designation: 'Frontend Developer',
      status: 'Active'
    },
    {
      id: 102,
      name: 'Priya Singh',
      email: 'priya@gmail.com',
      department: 'HR',
      designation: 'HR Executive',
      status: 'Active'
    },
    {
      id: 103,
      name: 'Amit Kumar',
      email: 'amit@gmail.com',
      department: 'Finance',
      designation: 'Accountant',
      status: 'Inactive'
    },
    {
      id: 104,
      name: 'Sneha Patel',
      email: 'sneha@gmail.com',
      department: 'Marketing',
      designation: 'Marketing Manager',
      status: 'Active'
    },
    {
      id: 105,
      name: 'Arjun Reddy',
      email: 'arjun@gmail.com',
      department: 'Engineering',
      designation: 'Backend Developer',
      status: 'Inactive'
    }
  ];
// Search & filter

  searchText = '';

selectedDepartment: string | null = null;
selectedStatus: string | null = null;

departments = [
  { label: 'Engineering', value: 'Engineering' },
  { label: 'HR', value: 'HR' },
  { label: 'Finance', value: 'Finance' },
  { label: 'Marketing', value: 'Marketing' }
];

statuses = [
  { label: 'Active', value: 'Active' },
  { label: 'Inactive', value: 'Inactive' }
];

get filteredEmployees(): Employee[] {
  return this.employees.filter(employee => {
    const matchesName = employee.name
      .toLowerCase()
      .includes(this.searchText.trim().toLowerCase());
// there no department selceted or employee departments must match the selected department
    const matchesDepartment =
      !this.selectedDepartment ||
      employee.department === this.selectedDepartment;

    const matchesStatus =
      !this.selectedStatus ||
      employee.status === this.selectedStatus;
// combining-filter----must match all the conditions "true"
    return matchesName && matchesDepartment && matchesStatus;
  });
}

clearFilters(): void {
  this.searchText = '';
  this.selectedDepartment = null;
  this.selectedStatus = null;
}

//Reactive-form

private messageservice=inject(MessageService)

private fb = new FormBuilder();

dialogVisible = false;

employeeForm = this.fb.group({
  name: ['', Validators.required],
  email: ['', [Validators.required, Validators.email]],
  department: ['', Validators.required],
  designation: ['', Validators.required],
  status: ['Active', Validators.required]
});

departmentOptions = [
  { label: 'Engineering', value: 'Engineering' },
  { label: 'HR', value: 'HR' },
  { label: 'Finance', value: 'Finance' },
  { label: 'Marketing', value: 'Marketing' }
];

statusOptions = [
  { label: 'Active', value: 'Active' },
  { label: 'Inactive', value: 'Inactive' }
];

openAddDialog(): void {
  this.employeeForm.reset({
    name: '',
    email: '',
    department: '',
    designation: '',
    status: 'Active'
  });

  this.dialogVisible = true;
}
// update/add/edit/rest---logics

selectedEmployeeId: number | null = null;

//editmethod
editEmployee(employee: Employee): void {
  this.selectedEmployeeId = employee.id;

  this.employeeForm.patchValue({
    name: employee.name,
    email: employee.email,
    department: employee.department,
    designation: employee.designation,
    status: employee.status
  });

  this.dialogVisible = true;
}


deleteEmployee(id: number): void {
  this.employees = this.employees.filter(
    employee => employee.id !== id
  );

  this.messageservice.add({
    severity: 'success',
    summary: 'Deleted',
    detail: 'Employee deleted successfully'
  });
}


saveEmployee(): void {
  if (this.employeeForm.invalid) {
    this.employeeForm.markAllAsTouched();
    return;
  }

  const formValue = this.employeeForm.getRawValue();

  if (this.selectedEmployeeId !== null) {
    // Update existing employee
    this.employees = this.employees.map(employee =>
      employee.id === this.selectedEmployeeId
        ? {
            ...employee,
            name: formValue.name!,
            email: formValue.email!,
            department: formValue.department!,
            designation: formValue.designation!,
            status: formValue.status as 'Active' | 'Inactive'
          }
        : employee
    );

    this.messageservice.add({
      severity: 'success',
      summary: 'Updated',
      detail: 'Employee updated successfully'
    });

  } else {
    // Add new employee
    const newEmployee: Employee = {
      id: Math.max(0, ...this.employees.map(e => e.id)) + 1,
      name: formValue.name!,
      email: formValue.email!,
      department: formValue.department!,
      designation: formValue.designation!,
      status: formValue.status as 'Active' | 'Inactive'
    };

    this.employees = [...this.employees, newEmployee];

    this.messageservice.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Employee added successfully'
    });
  }

  // Clear filters so the employee is visible
  this.searchText = '';
  this.selectedDepartment = null;
  this.selectedStatus = null;

  // Reset edit mode and close the dialog
  this.selectedEmployeeId = null;
  this.dialogVisible = false;
  this.employeeForm.reset();
}



}
