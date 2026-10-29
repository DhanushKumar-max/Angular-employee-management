import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ɵInternalFormsSharedModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, of, switchMap } from 'rxjs';

@Component({
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule],
  selector: 'app-form-check-debouncing',
  styleUrl: './form-check-debouncing.css',
  templateUrl: './form-check-debouncing.html',
})
export class FormCheckDebouncing implements  OnInit {
obj=new FormGroup({
  trail:new FormControl('')
})
constructor(private change:ChangeDetectorRef){}
search=''
  ngOnInit(): void {
    this.obj.controls.trail.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((val)=>{
        return of (val)
      })
    ).subscribe((val)=>{
      this.search=val ??''
      this.change.detectChanges()
    })
    
  }
}
