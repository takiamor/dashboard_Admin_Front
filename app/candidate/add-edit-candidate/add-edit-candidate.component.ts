import { Component, Input, OnInit } from '@angular/core';
import { CandidateServiceService } from 'src/app/Service/candidate-service.service';

@Component({
  selector: 'app-add-edit-candidate',
  templateUrl: './add-edit-candidate.component.html',
  styleUrls: ['./add-edit-candidate.component.css']
})
export class AddEditCandidateComponent implements OnInit {

  constructor(private service:CandidateServiceService) { }

  @Input() Cand:any;
  id:string | undefined;
  name:string | undefined;
  email:string | undefined;
  phone:string | undefined;
  pass:string | undefined;

  CandidateList:any=[];

  ngOnInit(): void {
    
  }

  

  addCand(){
    var val = {id:this.id,
                name:this.name,
                email:this.email,
              phone:this.phone,
            pass:this.pass};

    this.service.addCan(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateCand(){
    var val = {id:this.id,
      name:this.name,
      email:this.email,
    phone:this.phone,
  pass:this.pass};

    this.service.updateCan(val).subscribe(res=>{
    alert(res.toString());
    });
  }


}
