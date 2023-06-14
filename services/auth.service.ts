import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, catchError, tap, throwError } from 'rxjs';
import { User } from '../auth/user.module';
import { Router } from '@angular/router';

interface AuthResponseData{  //interface is created for response payload, this payloads can get from below mentioned url
  idToken:string;
  email:string;
  refreshToken:string;
  expiresIn:string;
  localId:string;
  registered? : boolean;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
isLoggedIn:boolean=false;
userSub = new BehaviorSubject<User>(null)
clearTimer: any;
  constructor(private http:HttpClient,private router:Router) { }
  login(){
    this.isLoggedIn = true;
  }
  logout(){
    this.isLoggedIn = false;
  }
  isAuthenticated(){
    return this.isLoggedIn;
  }
  //from here onwards it is belongs to authenticate functionality for auth component
  signUp(email:string, password:string){ 
     //this url and api key is get from firebase. 
    //  for url we get from "https://firebase.google.com/docs/reference/rest/auth#section-create-email-password"
    // for api key in firebase -> project setting -> api key
    return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDAURTzq97sp8Rxd7vbW9LXQ-qXHkj_gBA`,
    {email,password,returnSecureToken:true}
     // this all are request body payload, we can get from the above mentioned url
    ).pipe(      //error handling in through rxjs operator
      // catchError((errorRes) => {

        // to aviod duplicate the code for login and signUp, we will create seperate method and call that method inside the catchError
        
          catchError(this.getErrorHandler), tap(this.handleUser.bind(this))
    );
        // let errorMessage = 'An error occured';
        // if(!errorRes.error || !errorRes.error.error) {  //this is for network failure
        //   return throwError(errorMessage);
        // }
        // switch (errorRes.error.errorMessage){
        //   case 'EMAIL_EXISTS':
        //     errorMessage = 'Email already Exists';
        // }
        // return throwError(errorMessage);
      // }));
  }
  loginAuth(email: string, password:string){
      return this.http.post<AuthResponseData>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDAURTzq97sp8Rxd7vbW9LXQ-qXHkj_gBA`,
      {email, password,returnSecureToken:true}
      ).pipe(catchError(this.getErrorHandler),tap(this.handleUser.bind(this)));
  }
  private handleUser(response: AuthResponseData){
    const expireDate = new Date(new Date().getTime() + +response.expiresIn*1000);
    const user = new User(response.email, response.localId, response.idToken, expireDate);
    this.userSub.next(user);
    localStorage.setItem('userData',JSON.stringify(user));  // to convert data into string use stringify 
    this.autoLogout(+response.expiresIn * 1000)  // token is automically expire after 1 hour, then user again have to login
  }
  getErrorHandler(errorRes: HttpErrorResponse){
    let errorMessage = 'An error occured';
    if(!errorRes.error || !errorRes.error.error) {  //this is for network failure
      return throwError(errorMessage)
    }
    switch (errorRes.error.error.message){
      case 'EMAIL_EXISTS':
        errorMessage = 'Email already Exists';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'Email not found';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'Invalid password';
        break;
    }
    return throwError(errorMessage);
  }
  autoLogin(){
    let userData: {email:string; _token:string; expirationDate: string; localId:string} = JSON.parse(localStorage.getItem('userData'))  // to convert the string data into object use json.parse
    if(!userData){
      return
    }
    let user = new User(
      userData.email,
      userData._token,
      userData.localId,
      new Date(userData.expirationDate)
     );
     if(user.token){
      this.userSub.next(user);
     }
     let date = new Date().getTime();
     let expirationDate = new Date(userData.expirationDate).getTime();
     this.autoLogout(expirationDate - date)
  }
  autoLogout(expirationDate:number){
    this.clearTimer = setTimeout(() =>{
      this.logoutAuth();
    }, expirationDate)  // here expirationDate is after how many seconds it should auto logout we also give some manual seconds
  }
  logoutAuth(){
    this.userSub.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    if(this.clearTimer){  // if the user manually click logout, expiration time has to clear
      clearTimeout(this.clearTimer)
    }
  }
}
