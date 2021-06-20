import { Component, OnInit,OnChanges, SimpleChanges } from '@angular/core';
import { contact } from 'src/app/Forms/template-driven-form/contact';
import { regi } from './regi.service';



@Component({
  selector: 'app-register-crud',
  templateUrl: './register-crud.component.html',
  styleUrls: ['./register-crud.component.css']
})
export class RegisterCrudComponent implements OnInit {
  
  user:contact[]=[];
  flag:boolean=false;
  contact={
    firstname:"",
    lastname: "",
    city:"",
    street: "",
    pincode:""
    
  }
  
  value:any;
  constructor(private regi:regi) { }
 

  ngOnInit(): void {
  }
  onSubmit(formValue:contact){
    if(!this.flag){
      this.value=formValue;
      console.log(formValue);
      this.regi.addUser(formValue);
      
      this.user=this.regi.contactArray;
      console.log(this.user);
    }
    else{
      this.flag=false;
      console.log("i am In Update");
      console.log(formValue);
      
    }
      // this.value=formValue;
      // console.log(formValue);
      // this.regi.addUser(formValue);
      // //console.log(this.regi.getUser);
      // this.user=this.regi.contactArray;
      // console.log(this.user);
      
    
  }
  onEdit(i:any){
    this.flag=true;
    console.log("i am edit click"+i);
    this.contact=i;
    
    //this.regi.onEdit(i);
  }
  onDelete(user:any){
    this.regi.onDelete(user);
  }
  onUpdate(updatedContact:any){
    this.flag=false;
    console.log("i am In Update");
    console.log(updatedContact);
    
   //this.regi.onUpdate();
  // this.user=this.regi.contactArray;
   

  }
}
