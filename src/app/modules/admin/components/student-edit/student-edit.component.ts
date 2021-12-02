import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StudentData } from './student-data';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  constructor(private auth:AuthService,private route:ActivatedRoute,private router:Router) { }

  student:any;
  fetchedStudent:any;
  id:string;
  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id');
    this.auth.getStudentSpecific(this.id).subscribe(response=>{
      this.fetchedStudent=response.message;
     
      const {firstName,lastName,gender,qualification,percentage,passout,address,number,email}=this.fetchedStudent;
      this.student=new StudentData(this.id,firstName,lastName,gender,qualification,percentage,passout,address,number,email);
      console.log(this.student);
      
    },error=>{
      console.log(error);
      
    })
  }
  updateStudent(){
    this.auth.updateStudent(this.student).subscribe(response=>{
      console.log(response); 
      alert(response.message);
      this.router.navigate(['/admin/students'])

    },error=>{
      console.log(error);      
    })    
  }



}
