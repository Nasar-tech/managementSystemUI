import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyspecificComponent } from './facultyspecific.component';

describe('FacultyspecificComponent', () => {
  let component: FacultyspecificComponent;
  let fixture: ComponentFixture<FacultyspecificComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyspecificComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyspecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
