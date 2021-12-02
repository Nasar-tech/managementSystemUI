import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { StudentsComponent } from './components/students/students.component';
import { FacultyComponent } from './components/faculty/faculty.component';
import { InterviewsComponent } from './components/interviews/interviews.component';
import { CoursesComponent } from './components/courses/courses.component';
import { BatchesComponent } from './components/batches/batches.component';
import { FacultyspecificComponent } from './components/facultyspecific/facultyspecific.component';
import { FacultyAddComponent } from './components/faculty-add/faculty-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FacultyDeleteComponent } from './components/faculty-delete/faculty-delete.component';
import { FacultyEditComponent } from './components/faculty-edit/faculty-edit.component';
import { StudentSpecificComponent } from './components/student-specific/student-specific.component';
import { StudentDeleteComponent } from './components/student-delete/student-delete.component';
import { StudentAddComponent } from './components/student-add/student-add.component';
import { StudentEditComponent } from './components/student-edit/student-edit.component';
import { BatchesAddComponent } from './components/batches-add/batches-add.component';
import { BatchesDeleteComponent } from './components/batches-delete/batches-delete.component';
import { BatchesEditComponent } from './components/batches-edit/batches-edit.component';
import { BatchesSpecificComponent } from './components/batches-specific/batches-specific.component';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ServicesComponent,
    StudentsComponent,
    FacultyComponent,
    InterviewsComponent,
    CoursesComponent,
    BatchesComponent,
    FacultyspecificComponent,
    FacultyAddComponent,
    FacultyDeleteComponent,
    FacultyEditComponent,
    StudentSpecificComponent,
    StudentDeleteComponent,
    StudentAddComponent,
    StudentEditComponent,
    BatchesAddComponent,
    BatchesDeleteComponent,
    BatchesEditComponent,
    BatchesSpecificComponent
  ],
  imports: [
    CommonModule,FormsModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
