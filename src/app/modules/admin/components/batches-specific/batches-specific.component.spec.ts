import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchesSpecificComponent } from './batches-specific.component';

describe('BatchesSpecificComponent', () => {
  let component: BatchesSpecificComponent;
  let fixture: ComponentFixture<BatchesSpecificComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchesSpecificComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchesSpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
