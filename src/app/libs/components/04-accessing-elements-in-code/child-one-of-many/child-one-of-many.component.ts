import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child-one-of-many',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child-one-of-many.component.html',
  styleUrls: ['./child-one-of-many.component.scss']
})
export class ChildOneOfManyComponent {
  @Input() public userName = '';
}
