import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-batches',
  templateUrl: './batches.component.html',
  styleUrls: ['./batches.component.css']
})
export class BatchesComponent implements OnInit {

  constructor(private auth:AuthService,private route:Router) { }

  batches:any;
  ngOnInit(): void {
    this.auth.getBatches().subscribe(response=>{
      console.log(response.message);
      this.batches=response.message;
    },error=>{
      console.log(error);
      
    })
  }

}
