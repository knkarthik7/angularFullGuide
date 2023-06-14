import { NgModule } from "@angular/core";
import { ShortenPipe } from "./pipes/shorten.pipe";

@NgModule({
    declarations:[
        ShortenPipe,
    ], // here we can also imports formsModule, commonModule etc which is using more than one module and then exports
    exports:[
        ShortenPipe,
    ]
})  // this sharedModule is imported in the module where shorten pipe is using
export class SharedModule{

}