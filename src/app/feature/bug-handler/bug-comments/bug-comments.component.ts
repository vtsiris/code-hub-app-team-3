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
    this.parrentForm.valueChanges.subscribe(form => {
      const reporter = form.comments[0].reporter;
      const description = form.comments[0].description;
      const commentArray = [{reporter, description}];
      this._getComments(commentArray);
    });
  }

  get commentsArray(): FormArray {
    return <FormArray>this.parrentForm.controls.comments;
  }

  _getComments(commentArray) {
    this.getComments.emit(commentArray);
  }

}
