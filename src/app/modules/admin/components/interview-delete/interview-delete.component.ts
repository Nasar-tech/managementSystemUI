import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-interview-delete',
  templateUrl: './interview-delete.component.html',
  styleUrls: ['./interview-delete.component.css']
})
export class InterviewDeleteComponent implements OnInit {

  constructor(private auth:AuthService,private route:ActivatedRoute,private router:Router) { }

  id:string;
  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id');
    this.auth.deleteInterview(this.id).subscribe(response=>{
      alert(response.message);
      this.router.navigate(['admin/interviews']);    
    })
  }

}
