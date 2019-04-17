import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() pageNumber: number;
  @Input() isPreviousDisabled: boolean;
  @Input() isNextDisabled: boolean;
  @Output() paginatePage = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }

  _paginatePage(value: boolean) {
    this.paginatePage.emit(value);
  }

}
