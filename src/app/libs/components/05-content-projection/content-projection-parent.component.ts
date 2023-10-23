import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomInputComponent, InputDirective, LabelDirective, ErrorDirective } from './custom-input/custom-input.component';

@Component({
    selector: 'app-content-projection-parent',
    standalone: true,
    templateUrl: './content-projection-parent.component.html',
    styleUrls: ['./content-projection-parent.component.scss'],
    imports: [CommonModule, CustomInputComponent, InputDirective, LabelDirective, ErrorDirective]
})
export class ContentProjectionParentComponent {

}
