import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-batches-delete',
  templateUrl: './batches-delete.component.html',
  styleUrls: ['./batches-delete.component.css']
})
export class BatchesDeleteComponent implements OnInit {

  constructor(private auth:AuthService,private route:ActivatedRoute,private router:Router) { }

  id:string;
  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id');
    this.auth.deleteBatch(this.id).subscribe(response=>{
      console.log(response);      
      alert(response.message);
      this.router.navigate(['/admin/batches']);
    },error=>{
      alert(error.message);
      console.log(error);      
    })
  }

}
