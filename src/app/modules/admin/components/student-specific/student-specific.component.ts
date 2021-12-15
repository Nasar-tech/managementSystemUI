import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-student-specific',
  templateUrl: './student-specific.component.html',
  styleUrls: ['./student-specific.component.css']
})
export class StudentSpecificComponent implements OnInit {

  constructor(private route:ActivatedRoute,private auth:AuthService) { }

  id:string;
  student:any;
  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id');
    
    this.auth.getStudentSpecific(this.id).subscribe(response=>{
      console.log(response);
      this.student=response.message;
      
    },error=>{
      console.log(error);
      
    })
  }

}
