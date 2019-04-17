import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output() searchParams = new EventEmitter();
  searchForm: FormGroup;

  constructor(private fb: FormBuilder) { }

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
      status: form.controls.reporter.value
    };

    this.searchParams.emit(this.serialize(value));
  }

  resetParams() {
    this.searchForm.patchValue({ 'title': '', 'priority': '', 'reporter': '', 'status': '' });
    this.searchWithParams(this.searchForm);
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
