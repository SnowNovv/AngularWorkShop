import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';
  name:String="";
  score:number = 0;
  student = {
    name : "Peter",
    StudentId : "5921602736" ,
    weight : 59 ,
    height : 167
  }
  studentList=[{
    name : "Peter",
    StudentId : "5921602736" ,
    weight : 59 ,
    height : 167
  },{
    name : "Petero",
    StudentId : "5921602136" ,
    weight : 59 ,
    height : 167
  }]
  constructor() {
 
 this.studentList.map((object,index)=>{
   console.log(object);
   console.log(index);
   let obj:any = object;
   obj.bmi = (object.weight/((object.height/100)*(object.height/100))).toFixed(2)
   
   console.log(this.studentList);
   
   return obj;
 })
  }
}
