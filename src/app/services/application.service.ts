import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Candidateadd } from "../models/candidateadd.model";

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  url:string=environment.apiUrl+"/api/Candidates";
  formData:Candidateadd;
  constructor(private http:HttpClient) { }

  postCandidate(data):Observable<any>{
    console.log(data);
    return this.http.post(this.url,data);
  }
  getExams():Observable<any>{
    return this.http.get(environment.apiUrl+'/api/exams');
  }
  getStandards():Observable<any>{
    return this.http.get(environment.apiUrl+'/api/Standards');
  }
}
