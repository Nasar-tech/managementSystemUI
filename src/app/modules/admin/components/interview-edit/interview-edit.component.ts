import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-interview-edit',
  templateUrl: './interview-edit.component.html',
  styleUrls: ['./interview-edit.component.css']
})
export class InterviewEditComponent implements OnInit {

  constructor(private auth:AuthService,private route:ActivatedRoute,private router:Router) { }

  id:string;
  interview:any;
  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id')
    this.auth.getSpecificInterview(this.id).subscribe(response=>{    
      this.interview=response['message'][0];
      console.log(this.interview);
      
    })
  }
  updateInterviews(data){
    this.auth.updateInterview(data).subscribe(response=>{
      alert(response['message']);  
      this.router.navigate(['/admin/interviews'])
    },error=>{
      alert(error);
    })    
  }

}
