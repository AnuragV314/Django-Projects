import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "http://127.0.0.1:8000/"
  readonly PhotoUrl = "http://127.0.0.1:8000/media/"

  constructor(private http: HttpClient) { }

  // =============Department============

  getDepList(): Observable<any[]> {
    return this.http.get<[]>(this.APIUrl + "/department/");
  }

  addDepartment(val: any) {
    return this.http.post(this.APIUrl + "/department/", val);
  }

  updateDepartment(val: any) {
    return this.http.put(this.APIUrl + "/department/", val);
  }

  deleteDepartment(val: any) {
    // return this.http.delete(this.APIUrl + "/department/", val);
    return this.http.delete(this.APIUrl+"/department/"+val+"/");
  }

  getAllDepartNames(): Observable<any[]> {
    return this.http.get<[]>(this.APIUrl + "/department/");
  }


  // ==============Media File===========

  UploadPhoto(formData: FormData): Observable<any> {
    return this.http.post(this.APIUrl + '/SaveFile/', formData);
  }


  // =============Employee===============

  getEmpList(): Observable<any[]> {
    return this.http.get<[]>(this.APIUrl + "/employee/");
  }

  addEmployee(val: any) {
    return this.http.post(this.APIUrl + "/employee/", val);
  }

  updateEmployee(val: any) {
    return this.http.put(this.APIUrl + "/employee/", val);
  }

  deleteEmployee(val: any) {
    // return this.http.delete(this.APIUrl + "/employee/", val);
    return this.http.delete(this.APIUrl+"/employee/"+val+"/");
  }

  getAllEmployee(): Observable<any[]> {
    return this.http.get<[]>(this.APIUrl + "/employee/");
  }

}
