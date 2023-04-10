import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appDropdown]',
})
export class DropDownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') addOpen() {
    this.isOpen = !this.isOpen;
  }
}
