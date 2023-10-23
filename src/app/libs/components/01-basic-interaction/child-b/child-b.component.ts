import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-child-b',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './child-b.component.html',
  styleUrls: ['./child-b.component.scss']
})
export class ChildBComponent {
  @Output() logout = new EventEmitter();

  public emitLogout(): void {
    this.logout.emit();
  }
}
