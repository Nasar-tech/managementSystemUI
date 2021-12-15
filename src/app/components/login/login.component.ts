import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    if(this.authService.isLoggedIn()){
      this.router.navigate(['admin'])
    }
  }

  get email(){
    return this.loginForm.get('email')
  }
  get password(){
    return this.loginForm.get('password')
  }

  loginForm=this.fb.group({
    email:['',[Validators.required,Validators.minLength(3),Validators.email]],
    password:['',[Validators.required,Validators.minLength(3)]]
  });
  formSubmit(){
    if(this.loginForm.valid){
      this.authService.login(this.loginForm.value).subscribe(

        response=>{
          console.log(response);

          if(!response.token){
            alert(response.message);
            return;
          }
          
          const header=new HttpHeaders();
          header.set('x-auth-token',response.token);
          localStorage.setItem('x-auth-token',response.token);
          
          this.router.navigate(['/admin']);
          alert("login Successfully ..!")
        },
        (error)=>{
          console.log(error.message);
          
          alert("Database Error Please try again after sometime..!")}
      )
    }
  }

}
