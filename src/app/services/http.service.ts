import { Injectable } from '@angular/core';
import{HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http: HttpClient) { }

  public getData(url: string): Observable<any> {
    return this.http.get<any>(url);
  }
  public deleteData(url: string): Observable<any> {
    return this.http.delete<any>(url);
  }
 public editData(url:string, data:any):Observable<any>{
    return this.http.put(url, data)
  }
  public createData(url:string, data:any):Observable<any>{
    return this.http.post(url, data)
  }
}
