import { AfterContentChecked, AfterContentInit, Component, ContentChild, ContentChildren, Directive } from '@angular/core';
import { CommonModule } from '@angular/common';

@Directive({
  selector: 'input[appInput]',
  standalone: true
})
export class InputDirective {

}

@Component({
  selector: 'app-custom-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent implements AfterContentChecked {

  ngAfterContentChecked(): void {
    if (!this.input) {
      throw new Error('There are must be an appInput!');
    }
  }

  @ContentChild(InputDirective) input: InputDirective | undefined;
}

@Directive({
  selector: 'app-label',
  standalone: true
})
export class LabelDirective {

}

@Directive({
  selector: 'app-error',
  standalone: true
})
export class ErrorDirective {

}

