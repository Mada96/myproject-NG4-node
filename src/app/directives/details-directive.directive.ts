import { Directive,ElementRef,Renderer } from '@angular/core';

@Directive({
  selector: '[appDetailsDirective]'
})
export class DetailsDirectiveDirective {

  constructor(public Er:ElementRef) {
   Er.nativeElement.style.backgroundColor = 'yellow';
    Er.nativeElement.style.border = '1px solid blue';
    Er.nativeElement.style.border_raduis = '10px';
    Er.nativeElement.style.margin = '5px auto';
   }

}
