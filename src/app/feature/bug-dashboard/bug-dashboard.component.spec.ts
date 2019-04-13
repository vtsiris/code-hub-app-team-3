import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugDashboardComponent } from './bug-dashboard.component';

describe('BugDashboardComponent', () => {
  let component: BugDashboardComponent;
  let fixture: ComponentFixture<BugDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
