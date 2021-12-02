import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSpecificComponent } from './student-specific.component';

describe('StudentSpecificComponent', () => {
  let component: StudentSpecificComponent;
  let fixture: ComponentFixture<StudentSpecificComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentSpecificComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
