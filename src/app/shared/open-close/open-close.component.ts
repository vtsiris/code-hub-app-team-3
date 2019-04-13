import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { GearToggleService } from 'src/app/core/services/gear-toggle.service';

@Component({
  selector: 'app-open-close',
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        opacity: 1,
      })),
      state('closed', style({
        opacity: 0,
      })),
      transition('open => closed', [
        animate('1.5s')
      ]),
      transition('closed => open', [
        animate('1s')
      ]),
    ]),
  ],
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.scss']
})
export class OpenCloseComponent implements OnInit {

  isOpen = false;

  constructor(private gearToggle: GearToggleService) {}

  ngOnInit() {
    this.gearToggle.isOpen.subscribe(data => this.isOpen = data);
  }

  toggle() {
    this.gearToggle.isOpen.next(!this.isOpen);
  }

}
