import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup, ReactiveFormsModule, Validators, ɵInternalFormsSharedModule } from '@angular/forms';
import { validate } from '@angular/forms/signals';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-form-validations',
  styleUrl: './form-validations.css',
  templateUrl: './form-validations.html',
})
export class FormValidations {
  studentform=new FormGroup({
    name:new FormControl('',
      [Validators.required,Validators.minLength(3),Validators.pattern(/^[a-z/A-Z]+$/)]),
    age:new FormControl('',[Validators.required,Validators.min(18),Validators.max(60),Validators.pattern(/^[0-9]+$/)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    mobile:new FormControl('',[Validators.required,Validators.pattern(/^[0-9]{10}$/)]),



  })

  // isSubmitted = false;

submitForm() {

  // const age=this.studentform.get('age');

  // console.log('age.value:',age?.value);
  // console.log('age valid:',age?.valid);
  
  
  // this.isSubmitted = true;

  if (this.studentform.invalid) {
    this.studentform.markAllAsTouched()
    
    return;
  }

 else{
   console.log(this.studentform.value);
 }
}
}
