import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[au-fa-input input]'
})
export class InputRefDirective {

  focus = false;

  @HostListener('focus')
  onFocus() {
    this.focus = true;
    console.log('focus', this.focus);
  }

  @HostListener('blur')
  onBlur() {
    this.focus = false;
    console.log('focus', this.focus);
  }

}
