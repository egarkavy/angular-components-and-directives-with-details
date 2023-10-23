import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MutateElementDirective } from './mutate-element.directive';

@Component({
  selector: 'app-custom-directive-example',
  standalone: true,
  imports: [CommonModule, MutateElementDirective],
  templateUrl: './custom-directive-example.component.html',
  styleUrls: ['./custom-directive-example.component.scss']
})
export class CustomDirectiveExampleComponent {

}
