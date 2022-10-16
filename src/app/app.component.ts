import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-app';
  constructor(public userService: UserService){
     this.userService.getUsers().subscribe((res)=>{
        console.log(res);
        
     })
  }
}
