import { Bug } from './../../../core/models/bugs.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-bug-comments',
  templateUrl: './bug-comments.component.html',
  styleUrls: ['./bug-comments.component.scss']
})
export class BugCommentsComponent implements OnInit {

  @Input() parrentForm: FormGroup;
  @Output() getComments = new EventEmitter;

  constructor( ) { }

  ngOnInit() {
    let reporter: string;
    let description: string;
    this.parrentForm.valueChanges.subscribe(form => {
      reporter = form.comments[0].reporter;
      description = form.comments[0].description;
    });
  }

  get commentsArray(): FormArray {
    return <FormArray>this.parrentForm.controls.comments;
  }

}
