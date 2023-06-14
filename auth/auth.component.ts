import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertModalComponent } from '../shared/alert-modal/alert-modal.component';
import { PlaceholderDirective } from '../directives/placeholder.directive';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
isLoginMode = true;
isLoading = false;
error:string = null;
// closeSub : Subscription;
@ViewChild(PlaceholderDirective) alertHost: PlaceholderDirective;
  constructor(private authService:AuthService,private router:Router, private ComponentFactoryResolver: ComponentFactoryResolver) { }
// ComponentFactoryResolver method is import from angular/core, it is used to create a component from ts file
  ngOnInit(): void {
  }
onSwitchMode(){
  this.isLoginMode = !this.isLoginMode;
}
onSubmit(authForm:NgForm){
  // console.log(authForm.value);
  if(!authForm.valid){
    return
  }
  this.isLoading = true;
  
  if(this.isLoginMode){
    this.authService.loginAuth(authForm.value.email, authForm.value.password).subscribe(response => {
      //console.log(response);
      this.isLoading = false;
      this.router.navigate(['/home']);
      //console.log(response)
    },(errorMessage) => {  //here error message is coming from the auth service
      this.error = errorMessage;
      this.isLoading = false;
    }
      );
  }else{
    this.authService.signUp(authForm.value.email,authForm.value.password).subscribe(response => {
      //console.log(response);
      this.isLoading = false;
      this.router.navigate(['/home']);
      //console.log(response)
    }, 
    // (error) => {
      // console.log(error);
      // console.log(error.error.error.message)
      // this.isLoading = false;
      // this.error = 'Error occured'
      // this.error = error.error.error.message;
      (errorMessage) => {  //here error message is coming from the auth service
      this.error = errorMessage;
      // this.showErrorAlert(errorMessage);  // error message is shown in model popup, but popup component is created from ts file
      this.isLoading = false;
    }
    )
  }
}

// the below method is used to create the component dynamically from ts file

// showErrorAlert(message:string){
//  const componentFactory = this.ComponentFactoryResolver.resolveComponentFactory(AlertModalComponent);
//  this.alertHost.ViewContainerRef.clear(); //first we have to clear is any component is present then only we have to create new component
//  const componentRef = this.alertHost.ViewContainerRef.createComponent(componentFactory);
//  componentRef.instance.error = message;
//  this.closeSub = componentRef.instance.close.subscribe(() =>{
//   this.closeSub.unsubscribe();
//   this.alertHost.ViewContainerRef.clear();
//  })
// }
}
