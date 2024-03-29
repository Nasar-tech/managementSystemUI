import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.css'],
})
export class StudentDeleteComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private auth: AuthService,
    private router: Router
  ) {}

  public id: string;
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id!==null) {
      console.log(this.id);
      
      this.auth.deleteStudent(this.id).subscribe(
        (response) => {
          console.log(response.message);
          alert(response.message);
          this.router.navigate(['admin/students'],{replaceUrl:true});
        },
        (error) => {
          console.log(error);
          this.router.navigate(['admin/students']);
        }
      );
    }else{
      this.router.navigate(['admin/students']);
    }
  }
}
