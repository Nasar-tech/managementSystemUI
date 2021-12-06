import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-interview-specific',
  templateUrl: './interview-specific.component.html',
  styleUrls: ['./interview-specific.component.css']
})
export class InterviewSpecificComponent implements OnInit {

  constructor(private auth:AuthService,private route :ActivatedRoute,private router:Router) { }

  id:string;
  interview:any;
  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id');
    this.auth.getSpecificInterview(this.id).subscribe(response=>{
      
      this.interview=response['message'];
      
      
      
    })
  }

}
