import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-batches-add',
  templateUrl: './batches-add.component.html',
  styleUrls: ['./batches-add.component.css']
})
export class BatchesAddComponent implements OnInit {

  constructor(private auth:AuthService) { }


  ngOnInit(): void {
  }
  batchCreate(data){
    this.auth.createBatch(data).subscribe(response=>{
      console.log(response);
      alert(response.message);      
    },error=>{
      alert(error.error.message);
      console.log(error.error);      
    })
    
  }
  

}
