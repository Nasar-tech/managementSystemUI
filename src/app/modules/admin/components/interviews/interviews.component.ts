import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-interviews',
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.css']
})
export class InterviewsComponent implements OnInit {

  constructor(private auth:AuthService) { }

  interviews:any;
  ngOnInit(): void {
    this.auth.getInterviews().subscribe(response=>{
      console.log(response['data']);
      this.interviews=response['data'];      
    },error=>{
      console.log(error);      
    })
  }

}
