import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-facultyspecific',
  templateUrl: './facultyspecific.component.html',
  styleUrls: ['./facultyspecific.component.css']
})
export class FacultyspecificComponent implements OnInit {
  public id;
  public employee;
  constructor(private route:ActivatedRoute,private auth:AuthService) {
    //this.route.params.subscribe(resp=>this.id=resp.id);
    this.id= this.route.snapshot.paramMap.get('id');
    this.auth.getSpecificFaculty(this.id).subscribe(response=>{
      this.employee=response.data;
    })
   }
   
 
  ngOnInit(): void {
  } 
}
