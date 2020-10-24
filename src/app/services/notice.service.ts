import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Notice } from "../models/notice.model";

@Injectable({
  providedIn: 'root'
})
export class NoticeService {
  url=environment.apiUrl+"/api/Notices";
  formData:Notice
  constructor(private http:HttpClient) { }

  getAllNotice():Observable<Notice[]>{
    return this.http.get<Notice[]>(this.url);
  }
 GetLatestNotice():Observable<Notice>{
   return this.http.get<Notice>(environment.apiUrl+'/LatestNotice');
 }
  addNotice(form:Notice):Observable<Notice>{
    return this.http.post<Notice>(this.url,form);
  }

  getNotice(id:Number):Observable<Notice>{
    return this.http.get<Notice>(this.url+'/'+id);
  }

}
