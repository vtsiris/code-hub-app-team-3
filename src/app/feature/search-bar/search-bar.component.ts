import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from 'src/app/core/services/api-service.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-search-bar',
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        opacity: 1,
      })),
      state('closed', style({
        opacity: 0,
      })),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('1.5s')
      ]),
    ]),
  ],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output() searchParams = new EventEmitter();
  searchForm: FormGroup;
  showClearBtn = false;

  Priority = [
    { name: 'Minor', value: 1 },
    { name: 'Major', value: 2 },
    { name: 'Critical', value: 3 }
  ];

  Reporter: Array<string> = ['QA', 'PO', 'DEV'];

  Status: Array<string> = ['Ready for Test', 'Done', 'Rejected'];

  constructor(private fb: FormBuilder, private api: ApiServiceService) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      title: ['', []],
      priority: ['', []],
      reporter: ['', []],
      status: ['', []]
    });
  }

  searchWithParams(form: FormGroup) {
    const value = {
      title: form.controls.title.value,
      priority: form.controls.priority.value,
      reporter: form.controls.reporter.value,
      status: form.controls.status.value
    };

    this.searchParams.emit(this.api.serialize(value));
    this.showClearBtn = true;
  }

  resetParams() {
    this.searchForm.patchValue({ 'title': '', 'priority': '', 'reporter': '', 'status': '' });
    this.searchWithParams(this.searchForm);
    this.showClearBtn = false;
  }

}
