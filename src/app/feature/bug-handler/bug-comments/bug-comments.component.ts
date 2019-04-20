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
  }

  get commentsArray(): FormGroup {
    return <FormGroup>(<FormArray>this.parrentForm.controls.comments).at(0);
  }



}
