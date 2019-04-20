import { Bug } from 'src/app/core/models/bugs.model';
import { ApiServiceService } from '../../core/services/api-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormArrayName } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { Comment } from 'src/app/core/models/comments.models';

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
  existingComments: Comment[];
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
      status: ['', []],
      comments: this.fb.array([this.populateComments()]),
    });
    this.route.url.subscribe(url => this.currentUrl = url[0].path);
    if (this.currentUrl === 'editbug') {
      this.route.paramMap.subscribe(params => {
        this.editBugId = params.get('id');
        this.api.getBug(this.editBugId)
          .subscribe(bug => {
            this.editBug(bug);
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

  populateComments(): FormGroup {
    return this.fb.group({
      reporter: ['', []],
      description: ['', []],
    });
  }

  editBug(bug: Bug) {
    this.myForm.patchValue({
      title: bug.title,
      description: bug.description,
      priority: bug.priority,
      reporter: bug.reporter,
      status: bug.status,
    });
    this.existingComments = bug.comments;
  }

  get commentsArray(): FormArray {
    return <FormArray>this.myForm.controls.comments;
  }

  formSubmit(myform: FormGroup) {
    // tslint:disable-next-line:max-line-length
    if ((this.myForm.controls.comments['controls'][0]['controls']['reporter'].value !== '') && (this.myForm.controls.comments['controls'][0]['controls']['description'].value !== '')) {
      this.existingComments.push({
        reporter: this.myForm.controls.comments['controls'][0]['controls']['reporter'].value,
        description: this.myForm.controls.comments['controls'][0]['controls']['description'].value,
      });
    }
    const body: Bug = {
      title: myform.controls.title.value,
      description: myform.controls.description.value,
      priority: myform.controls.priority.value,
      reporter: myform.controls.reporter.value,
      status: myform.controls.status.value,
      comments: this.existingComments,
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
