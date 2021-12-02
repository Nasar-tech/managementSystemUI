import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  public students:[];
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    this.auth.getStudents().subscribe(response=>{
      console.log(response.message);
      this.students=response.message;
      
    })
  }


}
