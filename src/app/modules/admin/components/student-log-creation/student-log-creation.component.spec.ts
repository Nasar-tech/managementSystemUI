import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLogCreationComponent } from './student-log-creation.component';

describe('StudentLogCreationComponent', () => {
  let component: StudentLogCreationComponent;
  let fixture: ComponentFixture<StudentLogCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentLogCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentLogCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
