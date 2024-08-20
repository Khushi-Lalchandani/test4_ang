import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropDown]',
})
export class AppDropDown {
  @HostBinding('class.open') open = false;
  @HostListener('click') toggleOpen() {
    this.open = !this.open;
  }
}
