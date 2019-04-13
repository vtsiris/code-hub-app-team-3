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

  sortBugs(type, order, pageNumber) {
    // tslint:disable-next-line:max-line-length
    return this.http.get<Bug[]>(`https://bug-report-system-server.herokuapp.com/bugs?sort=${type},${order},desc&page=${pageNumber}&size=10&priority=1&reporter=QA&status=Done`);
  }

  postBug(bug: Bug) {
    return this.http.post<Bug>('https://bug-report-system-server.herokuapp.com/bugs', bug);
  }

  editBug(bug: Bug) {
    return this.http.put<Bug>('https://bug-report-system-server.herokuapp.com/bugs/' + bug.id, bug);
  }

  deleteBug(bug: Bug) {
    return this.http.delete('https://bug-report-system-server.herokuapp.com/bugs/' + bug.id);
  }

}
