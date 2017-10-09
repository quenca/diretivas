import { Directive, HostListener, HostBinding,
  ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

@HostListener('mouseenter') onmouseover(){
  /*this._renderer.setElementStyle(
    this._elementRef.nativeElement,
    'background-color', 'blue'
  );*/
   this.backgroundColor = 'purple';
}

@HostListener('mouseleave') onmouseleave(){
  /*this._renderer.setElementStyle(
    this._elementRef.nativeElement,
    'background-color', 'white'
  ); */
  this.backgroundColor = 'white';
}

// @HostBinding('style.backgroundColor') backgroundColor: sting;
@HostBinding('style.backgroundColor') get setColor(){
  // codigo extra;
  return this.backgroundColor;
}
private backgroundColor: string;

  constructor(
      // private _elementRef: ElementRef,
      // private _renderer: Renderer
      ) { }

}
