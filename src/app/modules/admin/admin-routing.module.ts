import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { BatchesAddComponent } from './components/batches-add/batches-add.component';
import { BatchesDeleteComponent } from './components/batches-delete/batches-delete.component';
import { BatchesEditComponent } from './components/batches-edit/batches-edit.component';
import { BatchesSpecificComponent } from './components/batches-specific/batches-specific.component';
import { BatchesComponent } from './components/batches/batches.component';
import { CoursesComponent } from './components/courses/courses.component';
import { FacultyAddComponent } from './components/faculty-add/faculty-add.component';
import { FacultyDeleteComponent } from './components/faculty-delete/faculty-delete.component';
import { FacultyEditComponent } from './components/faculty-edit/faculty-edit.component';
import { FacultyComponent } from './components/faculty/faculty.component';
import { FacultyspecificComponent } from './components/facultyspecific/facultyspecific.component';
import { HomeComponent } from './components/home/home.component';
import { InterviewAddComponent } from './components/interview-add/interview-add.component';
import { InterviewDeleteComponent } from './components/interview-delete/interview-delete.component';
import { InterviewEditComponent } from './components/interview-edit/interview-edit.component';
import { InterviewSpecificComponent } from './components/interview-specific/interview-specific.component';
import { InterviewsComponent } from './components/interviews/interviews.component';
import { ServicesComponent } from './components/services/services.component';
import { StudentAddComponent } from './components/student-add/student-add.component';
import { StudentDeleteComponent } from './components/student-delete/student-delete.component';
import { StudentEditComponent } from './components/student-edit/student-edit.component';
import { StudentSpecificComponent } from './components/student-specific/student-specific.component';
import { StudentsComponent } from './components/students/students.component';

const routes: Routes = [
  {path:"",component:AdminDashboardComponent,children:[
    {path:'home',component:HomeComponent},
    {path:'courses',component:CoursesComponent},
    {path:'services',component:ServicesComponent},





    {path:'faculty',component:FacultyComponent},
    {path:'faculty/:id',component:FacultyspecificComponent},
    {path:'facultyDelete/:id',component:FacultyDeleteComponent},
    {path:'facultyEdit/:id',component:FacultyEditComponent},
    {path:'addFaculty',component:FacultyAddComponent},  

    {path:'students',component:StudentsComponent},
    {path:'addStudent',component:StudentAddComponent},
    {path:'student/:id',component:StudentSpecificComponent},
    {path:'studentDelete/:id',component:StudentDeleteComponent},
    {path:'studentEdit/:id',component:StudentEditComponent},

    {path:'batches',component:BatchesComponent},
    {path:'addBatches',component:BatchesAddComponent},
    {path:'batch/:id',component:BatchesSpecificComponent},
    {path:'batchEdit/:id',component:BatchesEditComponent},
    {path:'batchDelete/:id',component:BatchesDeleteComponent},






    {path:'interviews',component:InterviewsComponent},
    {path:'interview/:id',component:InterviewSpecificComponent},
    {path:'addInterview',component:InterviewAddComponent},
    {path:'interviewEdit/:id',component:InterviewEditComponent},
    {path:'interviewDelete/:id',component:InterviewDeleteComponent},









    {path:'',redirectTo:'/admin/home',pathMatch:"full"},
    {path:"**",component:HomeComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
