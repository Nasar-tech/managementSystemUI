import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchesDeleteComponent } from './batches-delete.component';

describe('BatchesDeleteComponent', () => {
  let component: BatchesDeleteComponent;
  let fixture: ComponentFixture<BatchesDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchesDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchesDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
