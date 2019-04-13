import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-bug',
  templateUrl: './new-bug.component.html',
  styleUrls: ['./new-bug.component.scss']
})
export class NewBugComponent implements OnInit {

  Priority = [
    'Minor', 'Major', 'Critical'
  ];

  Reporter = [
    'QA', 'PO', 'DEV'
  ];

  Status = [
    'Ready for Test', 'Done', 'Rejected'
  ];

  constructor() { }

  ngOnInit() {
  }

}
