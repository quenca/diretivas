import { Directive, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onmouseover(){
    this.backgroundColor = this.highlight;
 }

 @HostListener('mouseleave') onmouseleave(){
   this.backgroundColor = this.defaultColor;
 }

 @HostBinding('style.backgroundColor') get setColor(){
   return this.backgroundColor;
 }
 private backgroundColor: string;

 @Input() defaultColor: string = 'white';
 @Input('highlight') highlight: string = 'yellow';
 
  constructor() { }

  ngOnInit(){
  this.backgroundColor = this.defaultColor;
}

}
