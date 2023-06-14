import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, map, take, tap } from "rxjs";
import { AuthService } from "../auth.service";
@Injectable({
    providedIn: 'root'
  })
export class AuthGuard implements CanActivate{
    constructor(private authService:AuthService, private router:Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree>| Promise<boolean | UrlTree> {
       return this.authService.userSub.pipe(take(1),map(user => {  //take is rxjs operator, it should take only once then after it is unsubscribe
    //     return user ? true: false;  // this is used in older version, new version method is implemented below
    //    }), tap(auth => {
        
    //     if(!auth){
    //         this.router.navigate(['/auth'])
    //     }
    if(!user){  //in new version we have to import urlTree from @angular/router
        return this.router.createUrlTree(['/auth']);
    }
    return true;
       })) 
    }
}