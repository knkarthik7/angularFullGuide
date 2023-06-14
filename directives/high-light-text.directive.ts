import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighLightText]'
})
export class HighLightTextDirective implements OnInit {

  constructor(private element:ElementRef) { }

  ngOnInit(): void {
   (this.element.nativeElement as HTMLElement).style.background ="red"; // this type of methods looks like javascript, so it is not recommanded to create directives like this, we have some angular features like renderer2 object
   (this.element.nativeElement as HTMLElement).style.color = "white";
  }

}
