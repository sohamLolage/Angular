import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiRoot:string = 'https://api.github.com/users';
    
  constructor(private http:HttpClient){}

 
  getUser() {
     
      return this.http.get('https://api.github.com/users');
    }
}
