
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

import { Facultydata } from './facultydata';

@Component({
  selector: 'app-faculty-edit',
  templateUrl: './faculty-edit.component.html',
  styleUrls: ['./faculty-edit.component.css']
})
export class FacultyEditComponent implements OnInit {

  constructor(private activeLink:ActivatedRoute,private auth:AuthService,private route:Router) { }

  public id:string;
  public faculty:any;
  fetchedFaculty:any;



  ngOnInit(): void {
    this.id=this.activeLink.snapshot.paramMap.get('id');
    this.auth.getSpecificFaculty(this.id).subscribe(response=>{
      if(response.message){
        this.fetchedFaculty=response.data;
        const {facultyName,email,password,number,allotedBatchId}=this.fetchedFaculty;
        this.faculty=new Facultydata(this.id,facultyName,email,password,number,allotedBatchId);
        console.log(this.faculty); 
      }
      
    },error=>{
      console.log(error);
    });
  }
  updateFaculty(){
    
    this.auth.updateFaculty(this.faculty).subscribe(response=>{
      console.log(response);
      alert(response.message);
      this.route.navigate(['/admin/faculty']);
    },error=>{
      console.log(error);
    })
  }


}
