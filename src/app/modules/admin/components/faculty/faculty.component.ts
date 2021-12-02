import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {

  constructor(private auth:AuthService) { }

  faculty:[];
  ngOnInit(): void {
    this.auth.getFaculty().subscribe(response=>{
      this.faculty=response.message;      
    })
  }


}
