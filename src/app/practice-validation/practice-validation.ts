import { AsyncPipe, CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {  ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule,CommonModule],
  selector: 'app-practice-validation',
  styleUrl: './practice-validation.css',
  templateUrl: './practice-validation.html',
})
export class PracticeValidation {
  studentform=new FormGroup<any>({
    name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern('^[a-zA-Z ]+$')]),
    age:new FormControl('',[Validators.required,Validators.min(18),Validators.max(60),Validators.pattern('^[0-9]+$')]),
    phone:new FormControl('',[Validators.required,Validators.pattern('^[0-9]{10}$')]),
    mail:new FormControl('',[Validators.required,Validators.email]),
    gender:new FormControl('')
  })

  http=inject(HttpClient);
savedstudent:any =''
  submitform(){
    console.log('submit clicked')
    if(this.studentform.invalid){
      this.studentform.markAllAsTouched();
      console.log('form is invalid',this.studentform.value);
      
      return;
    }
    console.log('sending data',this.studentform.value);
    
    // else{
    //   console.log(this.studentform.value)
    // }

    // storing in db.json submitted values

    if(this.studentform.valid){
      this.http.post('http://localhost:3000/students',this.studentform.value).subscribe({
        next: (Response)=>{
          console.log('api calling stored response',Response)
          this.savedstudent=Response
          console.log('Succesfully saved',Response)
        },
        error:(Error)=>{
          console.log('Api call error',Error)
        }
      })
    }
    
  }
  
}
