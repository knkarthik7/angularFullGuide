import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AddUserComponent } from './add-user/add-user.component';
import { HighLightTextDirective } from './directives/high-light-text.directive';
import { RenderHighLightDirective } from './directives/render-high-light.directive';
import { AlternateIfDirective } from './directives/alternate-if.directive';
import { LoggingService } from './services/logging.service';
import { GetUserComponent } from './get-user/get-user.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/guards/auth-guard.service';
import { DeactivateGuardService } from './services/guards/deactivate-guard.service';
// import { UserResolveService } from './services/guards/user-resolve.service';
import { UserService } from './services/user.service';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FilterPipesComponent } from './filter-pipes/filter-pipes.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { PostComponent } from './post/post.component';
import { PostService } from './services/post.service';
import { AuthInterceptorsService } from './services/auth-interceptors.service';
import { LoginInterceptorService } from './services/login-interceptor.service';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner/loading-spinner.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AuthTokenInterceptorsService } from './services/auth-token-interceptors.service';
import { AuthGuard } from './services/guards/auth.guard';
import { AlertModalComponent } from './shared/alert-modal/alert-modal.component';
import { PlaceholderDirective } from './directives/placeholder.directive';
import { UsersModule } from './users.module';
import { FilterModule } from './filter.module';
import { SharedModule } from './shared.module';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    AddUserComponent,
    HighLightTextDirective,
    RenderHighLightDirective,
    AlternateIfDirective,
    GetUserComponent,
    HomeComponent,
    CategoryComponent,
    // AboutComponent,
    // ContactComponent,
    // EditUserComponent,
    PageNotFoundComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    // FilterPipesComponent,
    // ShortenPipe,
    // FilterPipe,
    PostComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    NavigationComponent,
    AlertModalComponent,
    PlaceholderDirective
  ],
  imports: [
    BrowserModule, // this module is used to import all built in directives but we can't import more than once in an appication. If we want avoid error for in built directives we have to import common module in all the module which you created
    // UsersModule,  // UsersModule is lazily loading using lazy loading, so need to import in app.module
    FilterModule, // always import child module before app routing module because if you not import then path present in child module will take wild card route shows page not found component
    SharedModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorsService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoginInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthTokenInterceptorsService,
      multi: true
    },
    LoggingService,
    AuthService,
    AuthGuardService,
    DeactivateGuardService,
    UserService,
    PostService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
