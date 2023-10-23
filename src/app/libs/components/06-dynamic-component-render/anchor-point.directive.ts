import { Directive, ViewContainerRef, inject } from '@angular/core';

@Directive({
  selector: '[appAnchorPoint]',
  standalone: true
})
export class AnchorPointDirective {
  public viewContainerRef = inject(ViewContainerRef)
}
