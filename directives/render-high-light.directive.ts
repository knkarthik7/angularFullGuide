import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRenderHighLight]'
})
export class RenderHighLightDirective implements OnInit{
  // @HostBinding('style.backgroundColor') color: string | undefined; //Host binding is used to bind the property of the element
//  @Input() defaultColor:string='';  //we want to sent data in the directive, that time we will use @Input decorator
//  @Input() highLightColor:string='';
  constructor(private element:ElementRef, private renderer:Renderer2) { }
ngOnInit(): void {
  this.renderer.setStyle(this.element.nativeElement,'background','grey');
  this.renderer.setStyle(this.element.nativeElement,'color','white')
}

// on listening the event also we can change the style of text content by using @HostListener
@HostListener('mouseenter') onmouseover(event:Event){
  this.renderer.setStyle(this.element.nativeElement,'background','blue'); // this line is used when we have renderer
  // this.color = 'blue' //this line is used when we have host binding decorator
  // this.color = this.defaultColor  // this line is used when we have sent values through input
}
@HostListener('mouseleave') onmouseleave(event:Event){
  this.renderer.setStyle(this.element.nativeElement,'background','yellow');
  this.renderer.setStyle(this.element.nativeElement,'color','black')
  // this.color = this.highLightColor
}
}
