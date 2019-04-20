import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBugsComponent } from './show-bugs.component';

describe('ShowBugsComponent', () => {
  let component: ShowBugsComponent;
  let fixture: ComponentFixture<ShowBugsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowBugsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
