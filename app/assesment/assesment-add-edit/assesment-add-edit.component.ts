import { Component, Input, OnInit } from '@angular/core';
import { AssesmentService } from 'src/app/Service/assesment.service';

@Component({
  selector: 'app-assesment-add-edit',
  templateUrl: './assesment-add-edit.component.html',
  styleUrls: ['./assesment-add-edit.component.css']
})
export class AssesmentAddEditComponent implements OnInit {

  constructor(private service: AssesmentService ) { }
  @Input() Asse: any;
  // tslint:disable-next-line:variable-name
  id: string | undefined;
  // tslint:disable-next-line:variable-name
  name: string | undefined;
  // tslint:disable-next-line:variable-name
  desc: string | undefined;
  // tslint:disable-next-line:variable-name
  
  img: string | undefined;
 

  ngOnInit(): void {
   
  }
  // tslint:disable-next-line:typedef
  
  addAS(){
    const val = {id: this.Asse.id,
      name : this.Asse.name,
      desc : this.Asse.desc,
      img : this.service.APIUrl + this.img};
    this.service.addAs(val).subscribe(res => {
      alert(res.toString());
    });
  }
  
  // tslint:disable-next-line:typedef
  uploadPhoto(event: { target: { files: any[]; }; }){
    const file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('uploadedFile', file, file.name);

    this.service.UploadPhoto(formData).subscribe((data: any) => {
      this.img = data.toString();
      this.img = this.service.APIUrl + this.img;
    });
  }

}
