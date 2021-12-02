import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-interviews',
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.css']
})
export class InterviewsComponent implements OnInit {

  constructor(private authService:AuthService) { }

  interviews:any;
  ngOnInit(): void {
    this.authService.getInterviews().subscribe(response=>{
      console.log(response['data']);
      this.interviews=response['data'];
      
      
    })
  }

}
