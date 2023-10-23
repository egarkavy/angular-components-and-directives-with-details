import { Component, HostBinding, HostListener, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-host-parent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './host-parent.component.html',
  styleUrls: ['./host-parent.component.scss'],
})
export class HostParentComponent {
  @HostBinding('class') hostClass = 'huge-container'
  @HostBinding('class.app-background') shouldApplyBackground = true;
  
  public keyPressed = '';

  @HostListener('mouseenter')
  public onHovered(): void {
    this.shouldApplyBackground = true;
  }

  @HostListener('mouseleave')
  public onHoverOut(): void {
    this.shouldApplyBackground = false;
  }

  @HostListener('document:keydown', ['$event'])
  public onKeyDown(event: KeyboardEvent): void {
    this.keyPressed = event.key
  }
}
