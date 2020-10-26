import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResultEntry } from "../models/result-entry.model";
import { Exam } from "src/app/models/exam.model";
import { Standard } from "src/app/models/standard.model";

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  url=environment.apiUrl+"/api";
  constructor(private http:HttpClient) { }

  postData(data):Observable<ResultEntry>{
    return this.http.post<ResultEntry>(this.url+'/ResultEntry',data);
  }

  postMainData(data):Observable<any>{
    return this.http.post<any>(this.url+'/Results/Entry',data);
  }
  getStandards():Observable<Standard>{
    return this.http.get<Standard>(environment.apiUrl+'/Standards');
  }

  getExams():Observable<Exam>{
    return this.http.get<Exam>(environment.apiUrl+'/Exams');
  }
}
