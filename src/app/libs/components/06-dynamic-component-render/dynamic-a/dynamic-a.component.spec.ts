import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicAComponent } from './dynamic-a.component';

describe('DynamicAComponent', () => {
  let component: DynamicAComponent;
  let fixture: ComponentFixture<DynamicAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DynamicAComponent]
    });
    fixture = TestBed.createComponent(DynamicAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
