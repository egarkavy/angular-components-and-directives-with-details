import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-child-c-two-way',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './child-c-two-way.component.html',
  styleUrls: ['./child-c-two-way.component.scss']
})
export class ChildCTwoWayComponent {
  @Input() fontSize = 0;
  @Output() fontSizeChange = new EventEmitter<number>();

  public increaseSize(): void {
    this.fontSizeChange.emit(this.fontSize + 1);
  }
}
