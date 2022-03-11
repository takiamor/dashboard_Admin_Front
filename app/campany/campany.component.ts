import { Component, OnInit } from '@angular/core';
import { CampanyService } from 'src/app/Service/campany.service';

@Component({
  selector: 'app-campany',
  templateUrl: './campany.component.html',
  styleUrls: ['./campany.component.css']
})
export class CampanyComponent implements OnInit {

  Campanys :any = [];

  constructor(private Service: CampanyService) { }

  CampanyList: any = [];
  ActivateAddEditEmpComp = false;
  Camp: any;
  ngOnInit(): void {
    this.refreshCandList();
  }
  // tslint:disable-next-line:typedef
  addClick(){
    this.Camp = {
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
    this.Camp = item;
    this.ActivateAddEditEmpComp = true;
  }
   // tslint:disable-next-line:typedef
   refreshCandList() {
    this.Service.getCamList().subscribe(data => this.CampanyList = data);
}
// tslint:disable-next-line:typedef
deleteClick(item: any){
  if (confirm('Are you sure??')){
    this.Service.deleteCam(item.id_p).subscribe(data => {
      alert(data.toString());
      this.refreshCandList();
    });
  }
}
}
