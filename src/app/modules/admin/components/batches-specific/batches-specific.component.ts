import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-batches-specific',
  templateUrl: './batches-specific.component.html',
  styleUrls: ['./batches-specific.component.css']
})
export class BatchesSpecificComponent implements OnInit {

  constructor(private auth:AuthService,private router:ActivatedRoute) { }

  batch:any;
  id:string;
  ngOnInit(): void {
    this.id=this.router.snapshot.paramMap.get("id");

    this.auth.getSpecificBatches(this.id).subscribe(response=>{
      console.log(response);
    },error=>{
      console.log(error);
    })
  }

}
