import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { ChildCTwoWayComponent } from "./child-c-two-way/child-c-two-way.component";

@Component({
    selector: 'app-parent',
    standalone: true,
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.scss'],
    imports: [CommonModule, ChildAComponent, ChildBComponent, ChildCTwoWayComponent]
})
export class ParentComponent {
  public userName = 'John'
  public fontSize = 12;

  public logout(): void {
    this.userName = 'anonym'
  }
}
