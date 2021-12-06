import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { passwordValidator } from 'src/app/services/password.validators';
import { nameValidator2 } from 'src/app/services/username.validator';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  constructor(private fb:FormBuilder,private auth:AuthService,private route:Router) { }

  ngOnInit(): void {
    console.log(this.registrationForm);
    
  }

  get firstName(){
    return this.registrationForm.get('firstName');
  }
  get lastName(){
    return this.registrationForm.get('lastName');
  }
  get gender(){
    return this.registrationForm.get('gender');
  }
  get qualification(){
    return this.registrationForm.get('qualification');
  }
  get address(){
    return this.registrationForm.get('address');
  }
  get email(){
    return this.registrationForm.get('email');
  }
  get password(){
    return this.registrationForm.get('password');
  }
  get cpassword(){
    return this.registrationForm.get('cpassword');
  }
  get role(){
    return this.registrationForm.get('role');
  }
  get number(){
    return this.registrationForm.get('number');
  }
  registrationForm=this.fb.group({
    firstName:['',[Validators.required,Validators.minLength(3),nameValidator2(/admin/)]],
    lastName:['',[Validators.required,Validators.minLength(3)]],
    gender:['',[Validators.required,Validators.minLength(1)]],
    qualification:['',[Validators.required,Validators.minLength(2)]],
    percentage:['',[Validators.required,Validators.minLength(2)]],
    passout:['',[Validators.required,Validators.minLength(2)]],
    address:['',[Validators.required,Validators.minLength(3)]],
    email:['',[Validators.required,Validators.minLength(3),Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]],
    password:['',[Validators.required,Validators.minLength(3)]],
    cpassword:['',[Validators.required,Validators.minLength(3)]],
    number:['',[Validators.required,Validators.minLength(3)]],
    fatherName:['',[Validators.required]],
    occupation:['',[Validators.required]],
    sscpercentage:['',Validators.required],
    interpercentage:['',Validators.required],
    graduationpercentage:[''],
    pgpercentage:[''],
    doe:[''],
    dob:[''],
    doj:[''],
    course:[''],
    courseCompleted:['']
    
  },{validator:passwordValidator});

 
  createStudent(){    
    console.log(this.registrationForm.value);
    // this.auth.createStudent(this.registrationForm.value).subscribe(response=>{
    //   console.log(response);      
    //   this.route.navigate(['/admin/students']);
    // },error=>{
    //   console.log(error);
    // })    
  }
}
