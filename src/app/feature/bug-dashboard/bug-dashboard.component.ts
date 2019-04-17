import { ApiServiceService } from './../../core/services/api-service.service';
import { Component, OnInit } from '@angular/core';
import { Bug } from 'src/app/core/models/bugs.model';
import { ActivatedRoute } from '@angular/router';
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
  pageNumber = 0;

  isPreviousDisabled: boolean;
  isNextDisabled: boolean;

  constructor(private api: ApiServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.fetchInitialData();
  }

  fetchInitialData(): void {
    this.route.data.subscribe((data) => {
      this.bugs = data.bugs;

      if (this.bugs.length < 10) {
        this.isNextDisabled = true;  // disable next button
      } else {
        this.isNextDisabled = false; // enable next button
      }

      this.isPreviousDisabled = true;
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
    this.api.sortBugs(type, this.order, this.pageNumber, '').subscribe(data => {
      this.bugs = data;
    });
  }

  paginatePage(clickedNext: boolean) {
    if (clickedNext) {
      this.pageNumber++;  // increment page number
    } else {
      this.pageNumber--;  // increment page number
    }

    if (clickedNext) {
      this.isPreviousDisabled = false; // enable previous button
    } else if (!clickedNext && this.pageNumber > 0) {
      this.isPreviousDisabled = false; // enable previous button
      this.isNextDisabled = false;
    } else if (this.pageNumber === 0) {
      this.isPreviousDisabled = true; // disable previous button
      this.isNextDisabled = false;
    }

    this.api.sortBugs('title', this.order, this.pageNumber, '').subscribe(data => {
      this.bugs = data;
      if (this.bugs.length < 10) {
        this.isNextDisabled = true;  // disable next button
      } else {
        this.isNextDisabled = false; // enable next button
      }
    });
  }

  searchWithParamsProvided(queryStringParams) {
    this.pageNumber = 0;
    this.api.sortBugs('title', this.order, this.pageNumber, queryStringParams).subscribe(data => {
      this.bugs = data;
    });
  }

}
