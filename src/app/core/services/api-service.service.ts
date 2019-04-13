import { Bug } from './../models/bugs.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  getBugs() {
    return this.http.get<Bug[]>('https://bug-report-system-server.herokuapp.com/bugs');
  }

  postBug(bug: Bug) {
    return this.http.post<Bug>('https://bug-report-system-server.herokuapp.com/bugs', bug);
  }
}
