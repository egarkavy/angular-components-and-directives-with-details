import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultEncapsulationComponent } from './default-encapsulation/default-encapsulation.component';
import { NoneEncapsulationComponent } from './none-encapsulation/none-encapsulation.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, DefaultEncapsulationComponent, NoneEncapsulationComponent],
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class EncapsulationParentComponent {

}
