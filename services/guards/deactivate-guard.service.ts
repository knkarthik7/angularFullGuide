import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

export interface deactivateGuard {
  canExit: () => boolean | Promise<boolean> | Observable<boolean>;

}
export class DeactivateGuardService implements CanDeactivate<deactivateGuard> {

  constructor() { }
  canDeactivate(component: deactivateGuard,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot | undefined
  ): boolean | Observable<boolean> | Promise<boolean> {
     return component.canExit();
   // return this.areYouSure();
  }
  areYouSure = (): boolean => {
    return confirm('Sure you want to change?')
  };
}
