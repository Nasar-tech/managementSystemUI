import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { BatchData } from './batch-data';

@Component({
  selector: 'app-batches-edit',
  templateUrl: './batches-edit.component.html',
  styleUrls: ['./batches-edit.component.css']
})
export class BatchesEditComponent implements OnInit {

  constructor(private auth:AuthService,private route:ActivatedRoute,private router:Router) { }

  id:string;
  fetchedBatch:any;
  batch:any;
  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id');
    this.auth.getSpecificBatches(this.id).subscribe(response=>{
      this.fetchedBatch=response.message;
      const{batchId,courseName,facultyName,durationInDays}=this.fetchedBatch;
      this.batch=new BatchData(batchId,courseName,facultyName,durationInDays);
           
    })
  }
  updateBatches(data){
    this.auth.updateBatch(data).subscribe(response=>{
      alert(response.message);
      this.router.navigate(['/admin/batches']);
    },error=>{
      alert(error.message)
    })
    
  }

}
