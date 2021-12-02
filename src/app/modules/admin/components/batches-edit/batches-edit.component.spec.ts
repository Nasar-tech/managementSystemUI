import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchesEditComponent } from './batches-edit.component';

describe('BatchesEditComponent', () => {
  let component: BatchesEditComponent;
  let fixture: ComponentFixture<BatchesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
