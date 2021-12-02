import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-faculty-delete',
  templateUrl: './faculty-delete.component.html',
  styleUrls: ['./faculty-delete.component.css']
})
export class FacultyDeleteComponent implements OnInit {

  constructor(private activeRoute:ActivatedRoute,private auth:AuthService,private route:Router) { }

  id:string;
  ngOnInit(): void {
    this.id=this.activeRoute.snapshot.paramMap.get('id');
    this.auth.deleteFaculty(this.id).subscribe(response=>{
      console.log(response);
      alert(response.message);
      this.route.navigate(['/admin/faculty'])
    },error=>{
      alert(error)
    })
  }

}
