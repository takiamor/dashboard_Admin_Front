import { Component, OnInit , NgZone } from '@angular/core';
import { CandidateServiceService } from 'src/app/Service/candidate-service.service';


@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {

  constructor(private service: CandidateServiceService) { }
  CandidateList: any = [];
  ActivateAddEditEmpComp = false;
  Cand: any;
  ngOnInit(): void {
    this.refreshCandList();
  }
  // tslint:disable-next-line:typedef
  addClick(){
    this.Cand = {
      id: 0,
      name: '',
      email: '',
      phone: '',
      pass: '',
    };
    this.ActivateAddEditEmpComp = true;

  }
  // tslint:disable-next-line:typedef
  editClick(item: any){
    console.log(item);
    this.Cand = item;
    this.ActivateAddEditEmpComp = true;
  }
   // tslint:disable-next-line:typedef
   refreshCandList() {
    this.service.getCanList().subscribe(data => this.CandidateList = data);
}
// tslint:disable-next-line:typedef
deleteClick(item: any){
  if (confirm('Are you sure??')){
    this.service.deleteCan(item.id_p).subscribe(data => {
      alert(data.toString());
      this.refreshCandList();
    });
  }
}
 
}
