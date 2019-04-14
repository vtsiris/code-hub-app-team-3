import { ApiServiceService } from './../../core/services/api-service.service';
import { Component, OnInit } from '@angular/core';
import { Bug } from 'src/app/core/models/bugs.model';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bug-dashboard',
  templateUrl: './bug-dashboard.component.html',
  styleUrls: ['./bug-dashboard.component.scss']
})
export class BugDashboardComponent implements OnInit {

  bugs: Bug[];
  displayedColumns: string[] = [
    'title', 'priority', 'reporter', 'createdAt', 'status'
  ];
  order = 'asc';
  pagenumber = 0;

  constructor(private api: ApiServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.fetchInitialData();
  }

  fetchInitialData(): void {
    this.route.data.subscribe((data) => {
      this.bugs = data.bugs;
    });
  }

  sortTable(type: string): void {
    switch (this.order) {
      case 'asc':
        this.order = 'desc';
        break;
      case 'desc':
        this.order = 'asc';
        break;
      default:
        this.order = 'asc';
        break;
    }
    this.api.sortBugs(type, this.order, this.pagenumber).subscribe(data => {
      this.bugs = data;
    });
  }

}
