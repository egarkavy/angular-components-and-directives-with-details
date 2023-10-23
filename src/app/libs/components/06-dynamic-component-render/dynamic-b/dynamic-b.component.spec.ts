import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicBComponent } from './dynamic-b.component';

describe('DynamicBComponent', () => {
  let component: DynamicBComponent;
  let fixture: ComponentFixture<DynamicBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DynamicBComponent]
    });
    fixture = TestBed.createComponent(DynamicBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
