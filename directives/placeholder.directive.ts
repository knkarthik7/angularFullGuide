import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPlaceholder]'
})
export class PlaceholderDirective {

  constructor(public ViewContainerRef:ViewContainerRef) { }  // viewContainerRef is used to place the component dynamically using ts file

}
