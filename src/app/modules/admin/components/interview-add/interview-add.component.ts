import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-interview-add',
  templateUrl: './interview-add.component.html',
  styleUrls: ['./interview-add.component.css']
})
export class InterviewAddComponent implements OnInit {

  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  createInterview(data){
    this.auth.createInterview(data).subscribe(response=>{
      console.log(response);
      alert(response.message);
      this.router.navigate(['/admin/interviews']);      
    })
  }

}
