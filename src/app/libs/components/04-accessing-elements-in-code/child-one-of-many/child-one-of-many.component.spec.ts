import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildOneOfManyComponent } from './child-one-of-many.component';

describe('ChildOneOfManyComponent', () => {
  let component: ChildOneOfManyComponent;
  let fixture: ComponentFixture<ChildOneOfManyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ChildOneOfManyComponent]
    });
    fixture = TestBed.createComponent(ChildOneOfManyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
