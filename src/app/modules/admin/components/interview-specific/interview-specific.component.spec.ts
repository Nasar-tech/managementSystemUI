import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewSpecificComponent } from './interview-specific.component';

describe('InterviewSpecificComponent', () => {
  let component: InterviewSpecificComponent;
  let fixture: ComponentFixture<InterviewSpecificComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewSpecificComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewSpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
