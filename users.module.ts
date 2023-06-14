import { NgModule } from "@angular/core";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { EditUserComponent } from "./edit-user/edit-user.component";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { UserRoutingModule } from "./users-routing.module";

@NgModule({
    declarations: [
        AboutComponent,
        ContactComponent,
        EditUserComponent
    ],
    imports: [
        CommonModule,
        // RouterModule, RouterModule is not required because all router belongs to user is imported in users routing module, so this one here
        UserRoutingModule,
        FormsModule,
    ],
    exports: [  // if you not using any of this component in any other module then no need to export, if you export also not an issue
        AboutComponent,
        ContactComponent,
        EditUserComponent
    ]
})
export class UsersModule {

}