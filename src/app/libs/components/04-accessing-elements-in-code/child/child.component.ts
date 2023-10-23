import { Component, Directive, ElementRef, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  public state = 1;
  
  public changeInternalState(): void {
    this.state++;
  }
}


@Directive({
  selector: 'app-child[childModifier]',
  standalone: true,
  exportAs: 'rofls'
})
export class ChildModifierDirective {
  @Input() childModifier: boolean | undefined;
  
  private readonly elementRef = inject(ElementRef)

  public changeBackground(): void {
    this.elementRef.nativeElement.style.backgroundColor = 'red';
  }
}