import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from 'src/app/core/services/api-service.service';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output() searchParams = new EventEmitter();
  searchForm: FormGroup;

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
  }

  resetParams() {
    this.searchForm.patchValue({ 'title': '', 'priority': '', 'reporter': '', 'status': '' });
    this.searchWithParams(this.searchForm);
  }

}
