

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { fee } from './fee';


@Component({
  selector: 'app-student-fee',
  templateUrl: './student-fee.component.html',
  styleUrls: ['./student-fee.component.css']
})
export class StudentFeeComponent implements OnInit {

  constructor(private auth:AuthService,private route:ActivatedRoute,private router:Router) { }


  id:string;
  feeDetails:any;
  oldPaidFeeDetails:any;

  ngOnInit(): void {
    
    
    
    this.id=this.route.snapshot.paramMap.get('id');
    this.auth.fetchFeeDetails(this.id).subscribe(response=>{
      var {totalfee,paidfee,duefee}=response.message[0];

      this.oldPaidFeeDetails=paidfee;
      // Fetching Due amount



      duefee=totalfee-paidfee;

      this.feeDetails=new fee(totalfee,paidfee,duefee); 
      console.log(this.feeDetails.paidfee); 
      
           
    })
  }
  updateFee(){    
       
    this.auth.updateFeeDetails(this.id,this.feeDetails).subscribe(response=>{
      alert(response.message);
      this.createLog();
      this.router.navigate(['/admin/student/'+this.id],{replaceUrl:true});
    },error=>{
      console.log(error); 
    })    
  }
  logData:any;
  
  createLog(){
    
    this.logData = {
      "log":`Total Amount is : 20000, Now(Date) paid Amount is : 2000,Total paid is : 7000 and remaining is :13000 `, 
      "comment":``
    }
    this.auth.createLog(this.id,this.logData).subscribe(response=>{console.log(response);
    },err=>{console.log(err);
    })
    
  }
  totalfeeChange(event){
    console.log(event);
     
  }

}
