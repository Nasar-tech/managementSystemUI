import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { passwordValidator } from 'src/app/services/password.validators';
import { nameValidator2 } from 'src/app/services/username.validator';




@Component({
  selector: 'app-faculty-add',
  templateUrl: './faculty-add.component.html',
  styleUrls: ['./faculty-add.component.css']
})
export class FacultyAddComponent implements OnInit {

  constructor(private fb:FormBuilder,private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
   
  }
  
  get facultyName(){
    return this.registrationForm.get('facultyName');
  }
  get email(){
    return this.registrationForm.get('email');
  }
  get password(){
    return this.registrationForm.get('password');
  }
  get number(){
    return this.registrationForm.get('number');
  }
  get cpassword(){
    return this.registrationForm.get('cpassword');
  }
  get allotedBatchId(){
    return this.registrationForm.get('allotedBatchId');
  }


  registrationForm=this.fb.group({
    facultyName:['',[Validators.required,Validators.minLength(3),nameValidator2(/admin/)]],
    email:['',[Validators.required,Validators.minLength(3),Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]],
    password:['',[Validators.required,Validators.minLength(3)]],
    cpassword:['',[Validators.required,Validators.minLength(3)]],
    number:['',[Validators.required,Validators.minLength(3)]],
    allotedBatchId:['']
  },{validator:passwordValidator});

 
  createFaculty(){
    this.auth.createFaculty(this.registrationForm.value)
        .subscribe(response=>console.log("success",response),
        error=>console.log("failed",error)); 
    this.router.navigate(['/admin/faculty']);
    
  }
 
  

}
