import { NgModule } from "@angular/core";
import { FilterPipesComponent } from "./filter-pipes/filter-pipes.component";
import { ShortenPipe } from "./pipes/shorten.pipe";
import { FilterPipe } from "./pipes/filter.pipe";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "./shared.module";

@NgModule({
    declarations: [
        FilterPipesComponent,
        // ShortenPipe, // if we are using this shortenPipe in any other module, we should not import it more than one module. Component, pipe, directives are not import more than one module, if want to use this component, pipe, directives more than one module that time we have to create one shared module and that module is imported where it is necessary
        FilterPipe,
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        RouterModule.forChild([
            {path:'filter-pipes',component:FilterPipesComponent}, 
        ]),
    ]
})
export class FilterModule{

}