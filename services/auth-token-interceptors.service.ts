import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap, take } from 'rxjs';
import { AuthService } from './auth.service';
import { User } from '../auth/user.module';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenInterceptorsService implements HttpInterceptor{

  constructor(private authService:AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.authService.userSub.pipe(take(1), switchMap((user) => {
      if(!user) {
        return next.handle(req);
      }
      let modifiedReq = req.clone({
        params: req.params.append('auth', user.token),
      });
      return next.handle(modifiedReq);
    })
    );
  }
}
