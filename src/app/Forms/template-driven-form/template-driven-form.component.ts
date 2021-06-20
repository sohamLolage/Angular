import { Component, OnInit } from '@angular/core';
import { contact } from './contact';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  contact:contact={
    firstname:"",
    lastname: "",

    city:"",
    street: "",
    pincode:""
  }
value:any;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(formValue:any){
      this.value=formValue;
      console.log(this.value);
      
  }


}
