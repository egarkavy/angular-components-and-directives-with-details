import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-none-encapsulation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './none-encapsulation.component.html',
  styleUrls: ['./none-encapsulation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NoneEncapsulationComponent {

}
