import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Session } from "../models/session.model";

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  url=environment.apiUrl+"/api/Sessions";
  formData:Session;
  constructor(private http:HttpClient) { }

  addSession(form:Session):Observable<Session>{
    return this.http.post<Session>(this.url,form);
  }
}
