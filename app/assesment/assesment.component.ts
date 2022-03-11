import { Component, OnInit , NgZone } from '@angular/core';
import { AssesmentService } from '../Service/assesment.service';

@Component({
  selector: 'app-assesment',
  templateUrl: './assesment.component.html',
  styleUrls: ['./assesment.component.css']
})
export class AssesmentComponent implements OnInit {

  Assesment :any = [];

  constructor(private Service: AssesmentService) { }

  AssesmentList: any = [];
  ActivateAddEditEmpComp = false;
  Asse: any;
  ngOnInit(): void {
    this.refreshAsList();;
  }
  addClick(){
    this.Asse = {
      id: 0,
      name: '',
      decription: '',
      mail: '',
      tax: '',
      trade:'',
      pass:'',
    };
    this.ActivateAddEditEmpComp = true;

  }
  // tslint:disable-next-line:typedef
  editClick(item: any){
    console.log(item);
    this.Asse = item;
    this.ActivateAddEditEmpComp = true;
  }
   // tslint:disable-next-line:typedef
   refreshAsList() {
    this.Service.getAsList().subscribe(data => this.AssesmentList = data);
}
// tslint:disable-next-line:typedef
deleteClick(item: any){
  if (confirm('Are you sure??')){
    this.Service.deleteAs(item.id_p).subscribe(data => {
      alert(data.toString());
      this.refreshAsList();
    });
  }
}
  
}
