import { Bugs } from './../models/bugs.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  getBugs() {
    return this.http.get<Bugs[]>('https://bug-report-system-server.herokuapp.com/bugs');
  }
}
