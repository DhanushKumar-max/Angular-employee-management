import { Routes } from '@angular/router';
import { Inputcheck } from './inputcheck/inputcheck';
import { FormComponent } from './form-component/form-component';
import { FormCheckDebouncing } from './form-check-debouncing/form-check-debouncing';
import { PracticeTask } from './practice-task/practice-task';
import { FormValidations } from './form-validations/form-validations';
import { PracticeValidation } from './practice-validation/practice-validation';
import { EmployeeManagement } from './employee-management/employee-management';

export const routes: Routes = [
   
 
    {
        path:'employee-management',
        component:EmployeeManagement
    },
];
