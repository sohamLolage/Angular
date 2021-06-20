import { stringify } from "@angular/compiler/src/util";

export class Employee{
    firstname:string;
    lastname:string;
    street:string;
    city:string;
    pincode:string;
    constructor(){
        this.firstname="";
        this.lastname="";
        this.street="";
        this.city=" ";
        this.pincode="";
    }
}