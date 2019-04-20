import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugCommentsComponent } from './bug-comments.component';

describe('BugCommentsComponent', () => {
  let component: BugCommentsComponent;
  let fixture: ComponentFixture<BugCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
