import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ServicesComponent } from './components/ourservices/services.component';
import { InterviewsComponent } from './components/interviews/interviews.component';
import { BatchesComponent } from './components/batches/batches.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { AuthService } from './services/auth.service';
import { AuthGuardGuard } from './guard/auth-guard.guard';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotComponent,
    NotfoundComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    CoursesComponent,
    ServicesComponent,
    InterviewsComponent,
    BatchesComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [AuthService,AuthGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
