import { Component, OnInit, Input } from '@angular/core';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-show-bugs',
  templateUrl: './show-bugs.component.html',
  styleUrls: ['./show-bugs.component.scss']
})
export class ShowBugsComponent implements OnInit {

  @Input() existingComments;
  ngOnInit() {
  }
}
