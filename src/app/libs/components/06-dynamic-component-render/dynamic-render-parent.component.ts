import { Component, Type, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnchorPointDirective } from './anchor-point.directive';
import { DynamicBComponent } from './dynamic-b/dynamic-b.component';
import { DynamicAComponent } from './dynamic-a/dynamic-a.component';

@Component({
  selector: 'app-dynamic-render-parent',
  standalone: true,
  imports: [CommonModule, AnchorPointDirective],
  templateUrl: './dynamic-render-parent.component.html',
  styleUrls: ['./dynamic-render-parent.component.scss']
})
export class DynamicRenderParentComponent {
  @ViewChild(AnchorPointDirective) anchor!: AnchorPointDirective;

  public renderA(): void {
    this.renderAny(DynamicAComponent)
  }

  public renderB(): void {
    this.renderAny(DynamicBComponent)
  }

  private renderAny<T>(component: Type<T>): void {
    const viewContainerRef = this.anchor.viewContainerRef;
    viewContainerRef.clear();

    viewContainerRef.createComponent<T>(component);

  }
}
