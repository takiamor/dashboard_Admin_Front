import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CampanyService {
  readonly APIUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) { }
  getCamList(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl + '/campany');
  }
  // tslint:disable-next-line:typedef
  updateCam(val: any){
    return this.http.put(this.APIUrl + '/campany', val);
  }

  // tslint:disable-next-line:typedef
  deleteCam(val: any){
    return this.http.delete(this.APIUrl + '/campany/' + val);
  }
  // tslint:disable-next-line:typedef
  UploadPhoto(val: any){
    return this.http.post(this.APIUrl + '/campany/SaveFile', val);
  }
  // tslint:disable-next-line:typedef
  addCam(val: any){
    return this.http.post(this.APIUrl + '/campany', val);
  }
}
