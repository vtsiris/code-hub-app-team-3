import { Bug } from 'src/app/core/models/bugs.model';
import { ApiServiceService } from './../../core/services/api-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-bug',
  templateUrl: './new-bug.component.html',
  styleUrls: ['./new-bug.component.scss']
})
export class NewBugComponent implements OnInit {

  myForm: FormGroup;

  Priority = [
    {name: 'Minor', value: 1},
    {name: 'Major', value: 2},
    {name: 'Critical', value: 3}
  ];

  Reporter = [
    'QA', 'PO', 'DEV'
  ];

  Status = [
    'Ready for Test', 'Done', 'Rejected'
  ];


  titleFormControl = new FormControl('', [Validators.required]);
  descriptionFormControl = new FormControl('', [Validators.required]);
  priorityFormControl = new FormControl('', [Validators.required]);
  reporterFormControl = new FormControl('', [Validators.required]);
  statusFormControl = new FormControl('', []);


  constructor(private api: ApiServiceService, private router: Router) {
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      title: this.titleFormControl,
      description: this.descriptionFormControl,
      priority: this.priorityFormControl,
      reporter: this.reporterFormControl,
      status: this.statusFormControl
    });
    this.reporterFormControl.valueChanges.subscribe(value => {
      if (value === 'QA') {
        this.statusFormControl.setValidators(Validators.required);
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
      this.api.postBug(bug).subscribe( () => this.router.navigate(['/dashboard']));
    }
  }

}
