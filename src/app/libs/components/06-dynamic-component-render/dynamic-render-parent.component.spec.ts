import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicRenderParentComponent } from './dynamic-render-parent.component';

describe('DynamicRenderParentComponent', () => {
  let component: DynamicRenderParentComponent;
  let fixture: ComponentFixture<DynamicRenderParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DynamicRenderParentComponent]
    });
    fixture = TestBed.createComponent(DynamicRenderParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
