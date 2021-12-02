import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BatchesComponent } from './components/batches/batches.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { HomeComponent } from './components/home/home.component';
import { InterviewsComponent } from './components/interviews/interviews.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ServicesComponent } from './components/ourservices/services.component';
import { AuthGuardGuard } from './guard/auth-guard.guard';


const routes: Routes = [

  {path:'',redirectTo:'home',pathMatch:"full"},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'courses',component:CoursesComponent},
  {path:'interviews',component:InterviewsComponent},
  {path:'ourservices',component:ServicesComponent},
  {path:'batches',component:BatchesComponent},
  {path:'login',component:LoginComponent},
  {path:'forgot',component:ForgotComponent},

  {path:'admin',canActivate:[AuthGuardGuard],loadChildren:()=>import('./modules/admin/admin.module').then((m)=>m.AdminModule)},


  {path:'**',component:NotfoundComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
