import { Bug } from 'src/app/core/models/bugs.model';
import { ApiServiceService } from './../../core/services/api-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-bug',
  templateUrl: './new-bug.component.html',
  styleUrls: ['./new-bug.component.scss']
})
export class NewBugComponent implements OnInit {

  myForm: FormGroup;

  Priority = [
    { name: 'Minor', value: 1 },
    { name: 'Major', value: 2 },
    { name: 'Critical', value: 3 }
  ];

  Reporter: Array<string> = ['QA', 'PO', 'DEV'];

  Status: Array<string> = ['Ready for Test', 'Done', 'Rejected'];

  constructor(private api: ApiServiceService, private router: Router, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      priority: ['', [Validators.required]],
      reporter: ['', [Validators.required]],
      status: ['', []]
    });
    this.myForm.controls.reporter.valueChanges.subscribe(value => {
      if (value === 'QA') {
        this.myForm.controls.status.setValidators(Validators.required);
        this.myForm.controls.status.updateValueAndValidity();
      }
    });
  }

  formSubmit(myform: FormGroup) {
    const bug: Bug = {
      title: myform.value.title,
      description: myform.value.description,
      priority: myform.value.priority,
      reporter: myform.value.reporter,
      status: myform.value.status
    };
    if (myform.valid) {
      this.api.postBug(bug).subscribe(() => this.router.navigate(['/dashboard']));
    }
  }

}
