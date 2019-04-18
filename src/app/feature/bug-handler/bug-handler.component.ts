import { Bug } from 'src/app/core/models/bugs.model';
import { ApiServiceService } from '../../core/services/api-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-bug-handler',
  templateUrl: './bug-handler.component.html',
  styleUrls: ['./bug-handler.component.scss']
})
export class BugHandlerComponent implements OnInit {

  myForm: FormGroup;
  currentUrl: string;
  editBugId: string;
  bug: Bug;
  Priority = [
    { name: 'Minor', value: 1 },
    { name: 'Major', value: 2 },
    { name: 'Critical', value: 3 }
  ];

  Reporter: Array<string> = ['QA', 'PO', 'DEV'];

  Status: Array<string> = ['Ready for Test', 'Done', 'Rejected'];

  constructor(private api: ApiServiceService,
    public dialog: MatDialog,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      priority: ['', [Validators.required]],
      reporter: ['', [Validators.required]],
      status: ['', []]
    });
    this.route.url.subscribe(url => this.currentUrl = url[0].path);
    if (this.currentUrl === 'editbug') {
      this.route.paramMap.subscribe(params => {
        this.editBugId = params.get('id');
        this.api.getBug(this.editBugId)
          .subscribe(bug => {
            this.myForm.controls.title.setValue(bug.title);
            this.myForm.controls.description.setValue(bug.description);
            this.myForm.controls.priority.setValue(bug.priority);
            this.myForm.controls.reporter.setValue(bug.reporter);
            this.myForm.controls.status.setValue(bug.status);
          });
      });
    }
    this.myForm.controls.reporter.valueChanges.subscribe(value => {
      if (value === 'QA') {
        this.myForm.controls.status.setValidators(Validators.required);
        this.myForm.controls.status.updateValueAndValidity();
      } else {
        this.myForm.controls.status.clearValidators();
        this.myForm.controls.status.updateValueAndValidity();
      }
    });
  }

  formSubmit(myform: FormGroup) {
    let body = {
      title: myform.controls.title.value,
      description: myform.controls.description.value,
      priority: myform.controls.priority.value,
      reporter: myform.controls.reporter.value,
      status: myform.controls.status.value
    };
    if (myform.valid) {
      if (this.currentUrl === 'newbug') {
        this.api.postBug(body).subscribe(() => this.router.navigate(['/dashboard']));
      } else if (this.currentUrl === 'editbug') {
        body['id'] = this.editBugId;
        this.api.editBug(body).subscribe(() => {
          this.router.navigate(['/dashboard']);
        });
      }
    }
  }

  backToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  deleteBug() {
    this.api.deleteBug(this.editBugId).subscribe(() => {
      this.router.navigate(['/dashboard']);
    });
  }
}
