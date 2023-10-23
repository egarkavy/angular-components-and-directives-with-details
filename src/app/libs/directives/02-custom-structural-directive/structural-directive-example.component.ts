import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomForDirective } from './custom-for.directive';

@Component({
  selector: 'app-structural-directive-example',
  standalone: true,
  imports: [CommonModule, CustomForDirective],
  templateUrl: './structural-directive-example.component.html',
  styleUrls: ['./structural-directive-example.component.scss']
})
export class StructuralDirectiveExampleComponent {
  public readonly users = ['Billy', 'Andrey', 'Oleg', 'Van']

  public myTrackBy(a: number, b: string): number {
    console.log('I am called for ', a)
    return a;
  }

  public isGachi(user: string): boolean {
    return ['Billy', 'Van'].includes(user);
  }
}
