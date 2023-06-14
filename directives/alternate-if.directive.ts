import { Directive, Input, OnChanges, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAlternateIf]'
})
export class AlternateIfDirective implements OnChanges{
@Input() appAlternateIf:boolean | undefined;

// templateRef is import when we use structural directive and elementRef is import when we use attribute directive
// viewContainerRef is import where this directive is render  
constructor(private templateRef:TemplateRef<any>,private vcRef:ViewContainerRef) { }

ngOnChanges(): void {
  if (this.appAlternateIf){
    this.vcRef.createEmbeddedView(this.templateRef) // createEmbeddedView is used to create the template like if condition is true
  } else {
    this.vcRef.clear() // clear is used to clear the template like if condition is false
  }
}
}
