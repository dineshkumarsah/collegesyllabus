import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  //url:any ="http://localhost:4000";
  url='https://nojejs-myfirst-app.herokuapp.com'

  constructor(public http: HttpClient) { }

  getUsers(){
   return this.http.get(`${this.url}/user`)
  }
}
