import { Component, ElementRef, OnInit, QueryList, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ChildComponent, ChildModifierDirective } from './child/child.component';
import { ChildOneOfManyComponent } from './child-one-of-many/child-one-of-many.component';

@Component({
  selector: 'app-accessing-elements',
  standalone: true,
  imports: [CommonModule, MatButtonModule, ChildComponent, ChildModifierDirective, ChildOneOfManyComponent],
  templateUrl: './accessing-elements.component.html',
  styleUrls: ['./accessing-elements.component.scss']
})
export class AccessingElementsComponent implements OnInit {
  @ViewChild('buttonTarget') button: ElementRef<HTMLButtonElement> | undefined;
  

  @ViewChild('childRef') childComponent: ChildComponent | undefined;
  @ViewChild(ChildComponent) childComponentViaDirectAccess: ChildComponent | undefined;

  @ViewChild('nativeButtonTarget') matButtonElementRef: ElementRef<HTMLButtonElement> | undefined;

  @ViewChildren(ChildOneOfManyComponent) kindergarten: QueryList<ChildOneOfManyComponent> | undefined;

  public buttonClicked = false;
  public matButtonClicked = false

  public users = ['Anna', 'Zhanna', 'Mana'];

  public ngOnInit(): void {
    //This will not work!
    this.kindergarten?.changes.subscribe((children) => {
      window.alert(`Children in kindergarten ${children.length}`)
    })
  }

  public ngAfterViewInit(): void {
    this.kindergarten?.changes.subscribe((children) => {
      window.alert(`Children in kindergarten ${children.length}`)
    })
  }

  public clickFirstButton(): void {
    this.buttonClicked = true;
  }

  public clickMatButton(): void {
    this.matButtonClicked = true;
  }

  public clickOtherButton(): void {
    this.button?.nativeElement?.click();
    this.matButtonElementRef?.nativeElement?.click();
  }

  public changeChildInternalState(viaTemplateRefPass: ChildComponent): void {
    this.childComponent?.changeInternalState();
    this.childComponentViaDirectAccess?.changeInternalState();
    viaTemplateRefPass.changeInternalState();
  }

  public changeConflictingChild(viaTemplateRefPass: ChildModifierDirective): void {
    viaTemplateRefPass.changeBackground();
  }

  public addNewUser(): void {
    this.users = [...this.users, 'Mr. Proper']
  }

  public killAllChildren(): void {
    this.kindergarten?.forEach(child => child.userName = 'killed :(')
  }
}
