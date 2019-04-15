import { Bug } from 'src/app/core/models/bugs.model';
import { ApiServiceService } from '../../core/services/api-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-bug',
  templateUrl: './new-bug.component.html',
  styleUrls: ['./new-bug.component.scss']
})
export class NewBugComponent implements OnInit {

  myForm: FormGroup;
  currentUrl: string;
  bug: Bug;
  Priority = [
    { name: 'Minor', value: 1 },
    { name: 'Major', value: 2 },
    { name: 'Critical', value: 3 }
  ];

  Reporter: Array<string> = ['QA', 'PO', 'DEV'];

  Status: Array<string> = ['Ready for Test', 'Done', 'Rejected'];

  constructor(private api: ApiServiceService, private router: Router, private fb: FormBuilder, private route: ActivatedRoute) {
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
      this.route.paramMap.subscribe(params =>
        this.api.getBug(params.get('id'))
          .subscribe(bug => {
            this.myForm.controls.title.setValue(bug.title);
            this.myForm.controls.description.setValue(bug.description);
            this.myForm.controls.priority.setValue(bug.priority);
            this.myForm.controls.reporter.setValue(bug.reporter);
            this.myForm.controls.status.setValue(bug.status);
          })
      );
    }
    this.myForm.controls.reporter.valueChanges.subscribe(value => {
      if (value === 'QA') {
        this.myForm.controls.status.setValidators(Validators.required);
        this.myForm.controls.status.updateValueAndValidity();
      }
      else {
        this.myForm.controls.status.clearValidators();
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
      if (this.currentUrl === 'newbug') {
        this.api.postBug(bug).subscribe(() => this.router.navigate(['/dashboard']));
      } else if (this.currentUrl === 'editbug') {
        bug.id = this.bug.id;
        this.api.editBug(bug).subscribe(() => this.router.navigate(['/dashboard']));
      }
    }
  }

}
