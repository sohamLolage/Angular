import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  ename:string="";
  fromChild:string="";  
  
  constructor() { 
   
  }

  ngOnInit(): void {
  }
  onSend(msg:string){
    this.fromChild=msg;
  }
  

}
