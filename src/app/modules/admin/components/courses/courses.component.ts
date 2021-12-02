import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  
  courses:any;
  
  constructor(private authService:AuthService) { }
  ngOnInit(): void {
    this.authService.getCourses().subscribe(response=>{
      this.courses=response;
    });
    
  }

}
