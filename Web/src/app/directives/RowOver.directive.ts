import { Directive, ElementRef, HostListener, Input } from '@angular/core';
 
@Directive({
  selector: '[row-over]'
})
export class RowOver {
  constructor(private el: ElementRef) { }
 
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('whitesmoke');
  }
 
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
 
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}