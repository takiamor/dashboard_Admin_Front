import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidateServiceService {
  readonly APIUrl = 'http://localhost:5000/api';
  readonly PhotoUrl = 'http://localhost:5000/Photos/';
  constructor(private http: HttpClient) { }
  getCanList(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl + '/candidate');
  }
  // tslint:disable-next-line:typedef
  updateCan(val: any){
    return this.http.put(this.APIUrl + '/candidate', val);
  }

  // tslint:disable-next-line:typedef
  deleteCan(val: any){
    return this.http.delete(this.APIUrl + '/candidate/' + val);
  }
  // tslint:disable-next-line:typedef
  UploadPhoto(val: any){
    return this.http.post(this.APIUrl + '/candidate/SaveFile', val);
  }
  // tslint:disable-next-line:typedef
  addCan(val: any){
    return this.http.post(this.APIUrl + '/candidate', val);
  }
 
}
