import { Component, Input, OnInit } from '@angular/core';
import { CampanyService } from 'src/app/Service/campany.service';


@Component({
  selector: 'app-add-edit-campany',
  templateUrl: './add-edit-campany.component.html',
  styleUrls: ['./add-edit-campany.component.css']
})
export class AddEditCampanyComponent implements OnInit {

  constructor(private service:CampanyService) { }

  @Input() Camp:any;
  id: string | undefined;
  name!:string ;
  description:string | undefined;
  email:string | undefined;
  tax:string | undefined;
  trade:string | undefined;
  pass:string | undefined;

  CampanyList:any=[];

  ngOnInit(): void {
    
  }

  

  addCamp(){
    var val = {id:this.id,
                name:this.name,
                description:this.description,
                email:this.email,
                tax:this.tax,
                trade:this.trade,
            pass:this.pass};

    this.service.addCam(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateCamp(){
    var val = {id:this.id,
      name:this.name,
      description:this.description,
      email:this.email,
      tax:this.tax,
      trade:this.trade,
  pass:this.pass};

    this.service.updateCam(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}
