import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssesmentService {

  readonly APIUrl = 'http://localhost:5000/api';
  PhotoUrl: string | undefined;

  constructor(private http: HttpClient) { }
  getAsList(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl + '/assesment');
  }
  // tslint:disable-next-line:typedef
  updateAs(val: any){
    return this.http.put(this.APIUrl + '/assesment', val);
  }

  // tslint:disable-next-line:typedef
  deleteAs(val: any){
    return this.http.delete(this.APIUrl + '/assesment/' + val);
  }
  // tslint:disable-next-line:typedef
  UploadPhoto(val: any){
    return this.http.post(this.APIUrl + '/assesment/SaveFile', val);
  }
  // tslint:disable-next-line:typedef
  addAs(val: any){
    return this.http.post(this.APIUrl + '/assesment', val);
  }
}
