import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactComponent } from "./contact/contact.component";
import { AuthGuardService } from "./services/guards/auth-guard.service";
import { EditUserComponent } from "./edit-user/edit-user.component";
import { AboutComponent } from "./about/about.component";
import { DeactivateGuardService } from "./services/guards/deactivate-guard.service";

const userRoutes: Routes = [
    {path:'',component:ContactComponent, // due to lazy loading we have give path as ''
    // canActivate:[AuthGuardService], // canActivate is active the parent route & child route
    canActivateChild:[AuthGuardService], // canActivateChild is used to active the child route in the routing
    children:[{path:':id/:name',component:AboutComponent}, // children is used to get routing inside another component
              {path:':id/:name/edit',component:EditUserComponent, canDeactivate:[DeactivateGuardService],
            // resolve:{user:UserResolveService}
          }]},
];
@NgModule({
    imports: [RouterModule.forChild(userRoutes)], // we should not give root because it is not main module, only app module is main module
    exports: [RouterModule]
})
export class UserRoutingModule {

}