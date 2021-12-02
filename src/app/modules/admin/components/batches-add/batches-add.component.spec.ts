import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchesAddComponent } from './batches-add.component';

describe('BatchesAddComponent', () => {
  let component: BatchesAddComponent;
  let fixture: ComponentFixture<BatchesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchesAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
