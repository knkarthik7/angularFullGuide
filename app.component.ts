import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Karthik';
  userAdded:boolean = false;
  constructor(private authService:AuthService,private userService:UserService ){}
  onLogin(){
this.authService.login();
  }
  onLogout(){
    this.authService.logout()
  }
  ngOnInit(): void {
    this.userService.userAddedEvent.subscribe(data=>{
      this.userAdded = data;
    })
    this.authService.autoLogin();
  }
}
