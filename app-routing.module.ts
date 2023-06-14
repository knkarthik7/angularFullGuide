import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from './services/guards/auth-guard.service';
import { DeactivateGuardService } from './services/guards/deactivate-guard.service';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FilterPipesComponent } from './filter-pipes/filter-pipes.component';
import { PostComponent } from './post/post.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './services/guards/auth.guard';
// import { UserResolveService } from './services/guards/user-resolve.service';

const routes: Routes = [
  //  {path:'',redirectTo:'/home', pathMatch:'full'},
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'contact', loadChildren:() => import ('./users.module').then(m => m.UsersModule)}, //if we are using lazy loading for users module then no need to import this module in app.module
  {path:'category',component:CategoryComponent},
  // {path:'contact',component:ContactComponent},
  {path:'about/:id/:name',component:AboutComponent}, // this is used for params in route

  // the below routing path belongs to users module, so we use this routing in users module, if you are not creating any module then it should be in app-routing module only

  // {path:'contact',component:ContactComponent,
  // // canActivate:[AuthGuardService], // canActivate is active the parent route & child route
  // canActivateChild:[AuthGuardService], // canActivateChild is used to active the child route in the routing
  // children:[{path:':id/:name',component:AboutComponent}, // children is used to get routing inside another component
  //           {path:':id/:name/edit',component:EditUserComponent, canDeactivate:[DeactivateGuardService],
  //         // resolve:{user:UserResolveService}
  //       }]}, // canDeactivate is prevent the route from route 2 to route 1, it will popup message from leave the route 2 
  {path:'template-form',component:TemplateFormComponent},
  {path:'reactive-form',component:ReactiveFormComponent},
  // {path:'filter-pipes',component:FilterPipesComponent},
  {path:'post',component:PostComponent, canActivate:[AuthGuard]},
  {path:'auth',component:AuthComponent},
  {path:'**', component:PageNotFoundComponent}
          ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
