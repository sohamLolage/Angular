import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public user={
    "userName":"",
    "password":"",
    "firstName":"",
    "lastName":"",
    "email":"",
    "mobile":"",
    }
  constructor(private userservice:UserService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    
    console.log(this.user);
    this.userservice.addUser(this.user).subscribe(
      (data)=>{
          console.log(data);
          alert("success");
          
      },
      (error)=>{
        console.log(error);
        alert("something went wrong");
        

      }
      )
    
    
  }

}
