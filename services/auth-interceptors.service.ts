import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorsService implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {  //intercept should take 2 parameters
   console.log('sending request interceptor');
  let modifiedRequest = req.clone({  //interceptor is defined as the we can change the header of the request, we can change the header using following method
    // headers: req.headers.append('auth','test'), // this line is commanded when we working for authentication
    // url: 'https://ccnucnudn'  //we change the url,params also, if we change url it will cause error
  });
    return next.handle(modifiedRequest);
  }
  constructor() { }
}
