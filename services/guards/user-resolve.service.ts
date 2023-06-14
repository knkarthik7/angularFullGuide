import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

interface user {
  id:number;
  name:string;
}
// @Injectable()
// export class UserResolveService implements Resolve<user> {
  // constructor(private userService:UserService){}
  // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): user | Observable<user> | Promise<user> {
  //   let id = route.params['id'];
  //   let details = this.userService.getUser(id);
  //   return details;
  // }
// }
