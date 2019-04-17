import { Bug } from './../models/bugs.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const SERVER = 'https://bug-report-system-server.herokuapp.com/bugs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  getBugs(): Observable<Bug[]> {
    return this.http.get<Bug[]>(`${SERVER}`);
  }

  getBug(id: string): Observable<Bug> {
    return this.http.get<Bug>(`${SERVER}/${id}`);
  }

  sortBugs(type: string, order: string, pageNumber: number, queryStringParams: string): Observable<Bug[]> {
    // tslint:disable-next-line:max-line-length
    return this.http.get<Bug[]>(`${SERVER}?sort=${type},${order},desc&page=${pageNumber}&size=10&${queryStringParams}`);
  }

  postBug(bug: Bug): Observable<Bug> {
    return this.http.post<Bug>(SERVER, bug);
  }

  editBug(bug: Bug): Observable<Bug> {
    return this.http.put<Bug>(`${SERVER}/${bug.id}`, bug);
  }

  deleteBug(bug: string) {
    return this.http.delete(`${SERVER}/${bug}`);
  }

  serialize(obj) {
    const strQueryParams = [];
    for (const item in obj) {
      if (obj.hasOwnProperty(item)) {
        strQueryParams.push(encodeURIComponent(item) + '=' + encodeURIComponent(obj[item]));
      }
    }
    return strQueryParams.join('&');
  }

}
