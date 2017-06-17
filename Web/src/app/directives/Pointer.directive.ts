import { Directive, ElementRef, HostListener, Input } from '@angular/core';
 
@Directive({
  selector: '[pointer]'
})
export class Pointer {
  constructor(private el: ElementRef) { }
 
  @HostListener('mouseenter') onMouseEnter() {
    this.cursor('pointer');
  }
 
  @HostListener('mouseleave') onMouseLeave() {
    this.cursor(null);
  }
 
  private cursor(style: string) {
    this.el.nativeElement.style.cursor = style;
  }
}