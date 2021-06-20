import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  data: any = []

  constructor(public appService: UserService) { }

  
  /* method to call get-api from app.service */
  getUsersFromService() {
    try {
      this.appService.getUser()
        .subscribe(resp => {
          console.log(resp, "res");
          this.data = resp
          console.log("Data =>",this.data);
        },
          error => {
            console.log(error, "error");
          })
    } catch (e) {
      console.log(e);
    }
  }

  ngOnInit(): void {
  }

}
