import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Session, Subject } from '../models/session.model';

@Injectable({
  providedIn: 'root'
})
export class ExamService {
  url=environment.apiUrl+"/api/Exams";
  sessions:Session[];
  subjects:Subject[];
  constructor(private http:HttpClient) { }
  postExam(data):Observable<any>{
    console.log(data);
    return this.http.post(this.url,data);
  }
  getSession():Observable<Session[]>{
    return this.http.get<Session[]>(environment.apiUrl+'/api/Sessions');
  }

  getSubjects():Observable<Subject[]>{
    return this.http.get<Subject[]>(environment.apiUrl+'/api/Subjects')
  }
}
