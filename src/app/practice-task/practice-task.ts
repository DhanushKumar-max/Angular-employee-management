import { Component } from '@angular/core';
import { NgClass, NgStyle } from '../../../node_modules/@angular/common/types/_common_module-chunk';

@Component({
  imports: [ ],
  selector: 'app-practice-task',
  styleUrl: './practice-task.css',
  templateUrl: './practice-task.html',
})
export class PracticeTask {
  // box1=false;
  // box2=false;
  // box3=false;
  // box4=false;

  changeboxcolor=0;
  constructor(){
    console.log(`Initial value: ${this.changeboxcolor}`)
  }
  changebox(box:number){
    this.changeboxcolor= box;
    console.log(`Changing box ${box===box}`)

  }
  

}
