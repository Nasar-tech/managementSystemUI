import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-batches',
  templateUrl: './batches.component.html',
  styleUrls: ['./batches.component.css']
})
export class BatchesComponent implements OnInit {

  batches=[];
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.getBatches().subscribe(response=>{
      this.batches=response.message;
    });
  }

}
