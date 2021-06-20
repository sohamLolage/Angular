import { Injectable } from "@angular/core";
import { contact } from "src/app/Forms/template-driven-form/contact";

@Injectable({
    providedIn: 'root'
  })
  export class regi {

   
    contactArray: contact[] = [];
    selectedIndex:number=0;
    firstname:string="";
    lastname:string= "";

   
      city:string="";
      street:string= "";
      pincode:string="";
    constructor() { }
  
    addUser(user:any){
        this.contactArray.push(user);
        //console.log(this.contactArray);

    }

    onDelete(user:contact){
        let index=this.contactArray.indexOf(user);
        this.contactArray.splice(index,1);
      }
      onEdit(i:any){
         this.selectedIndex = i;
         this.firstname=this.contactArray[i].firstname;
         this.lastname=this.contactArray[i].lastname;
         this.street=this.contactArray[i].street;
         this.city=this.contactArray[i].city;
         this.pincode=this.contactArray[i].pincode;
       
    }
    onUpdate(){
        this.contactArray[this.selectedIndex].firstname=this.firstname;
        this.contactArray[this.selectedIndex].lastname=this.lastname;
        this.contactArray[this.selectedIndex].street=this.street;
        this.contactArray[this.selectedIndex].city=this.city;
        this.contactArray[this.selectedIndex].pincode=this.pincode;
        this.firstname="";
        this.lastname="";
        this.street='';
        this.city='';
        this.pincode='';

    }

  }