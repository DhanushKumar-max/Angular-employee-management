import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, of, switchMap } from 'rxjs';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-form-component',
  styleUrl: './form-component.css',
  templateUrl: './form-component.html',
})
export class FormComponent implements OnInit {
  obj=new FormGroup({
    search:new FormControl("")
  })
  constructor(private change:ChangeDetectorRef){

  }
  searchValue=""
  ngOnInit() {
    
    this.obj.controls.search.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((val)=>{
        return of(val)
      })
    ).subscribe(val=>{
      this.searchValue= val ?? ""
      this.change.detectChanges()

    })
  }

  
}
