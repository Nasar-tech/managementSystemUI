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
    courseCompleted:[''],
    placement:[''],
    placementClient:[''],
    image:[''],
    resume:['']   
  },{validator:passwordValidator});

 
 
  
  createStudent(){
    
    const studentForm = new FormData();
    studentForm.append("firstName", this.registrationForm.value.firstName);
    studentForm.append("lastName", this.registrationForm.value.lastName);
    studentForm.append("gender", this.registrationForm.value.gender);
    studentForm.append("qualification", this.registrationForm.value.qualification);
    studentForm.append("percentage", this.registrationForm.value.percentage);
    studentForm.append("passout", this.registrationForm.value.passout);
    studentForm.append("address", this.registrationForm.value.address);
    studentForm.append("email", this.registrationForm.value.email);
    studentForm.append("password", this.registrationForm.value.password);
    studentForm.append("number", this.registrationForm.value.number);
    studentForm.append("fatherName", this.registrationForm.value.fatherName);
    studentForm.append("occupation", this.registrationForm.value.occupation);
    studentForm.append("sscpercentage", this.registrationForm.value.sscpercentage);
    studentForm.append("interpercentage", this.registrationForm.value.interpercentage);
    studentForm.append("graduationpercentage", this.registrationForm.value.graduationpercentage);
    studentForm.append("pgpercentage", this.registrationForm.value.pgpercentage);
    studentForm.append("doe", this.registrationForm.value.doe);
    studentForm.append("dob", this.registrationForm.value.dob);
    studentForm.append("doj", this.registrationForm.value.doj);
    studentForm.append("course", this.registrationForm.value.course);
    studentForm.append("courseCompleted", this.registrationForm.value.courseCompleted);
    studentForm.append("placement", this.registrationForm.value.placement);
    studentForm.append("placementClient", this.registrationForm.value.placementClient);
    studentForm.append("image", this.selectedFile,this.selectedFile.name);
    studentForm.append("resume",this.selectedResume,this.selectedResume.name);
    
    

    this.auth.createStudent(studentForm).subscribe(response=>{ 
      alert(response.message);     
      this.route.navigate(['/admin/students',{clearHistory:true}]);
    },error=>{
      console.log(error);
    })
  }

  

  selectedFile:File=null;
  onFileSelected(event){
    this.selectedFile=<File>event.target.files[0];    
  }
  selectedResume:File=null;
  onResumeSelected(event){
    this.selectedResume=<File>event.target.files[0];
  }
}
