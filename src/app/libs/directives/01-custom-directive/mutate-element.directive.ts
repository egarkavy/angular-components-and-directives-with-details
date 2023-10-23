import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, inject } from '@angular/core';

@Directive({
  selector: '[appMutateElement]',
  standalone: true
})
export class MutateElementDirective implements OnInit {
  private readonly elementRef = inject(ElementRef);

  @Input() appMutateElement = 10;

  @HostListener('mouseenter')
  public onHovered(): void {
    this.elementRef.nativeElement.style.fontSize = this.appMutateElement + 'px';
  }

  @HostListener('mouseleave')
  public onHoverOut(): void {
    this.elementRef.nativeElement.style.fontSize = 10 + 'px';
  }

  public ngOnInit(): void {
    this.elementRef.nativeElement.style.transition = 'all 1s ease-in-out'
  }
}
