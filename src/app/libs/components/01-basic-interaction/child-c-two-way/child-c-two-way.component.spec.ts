import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCTwoWayComponent } from './child-c-two-way.component';

describe('ChildCTwoWayComponent', () => {
  let component: ChildCTwoWayComponent;
  let fixture: ComponentFixture<ChildCTwoWayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ChildCTwoWayComponent]
    });
    fixture = TestBed.createComponent(ChildCTwoWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
