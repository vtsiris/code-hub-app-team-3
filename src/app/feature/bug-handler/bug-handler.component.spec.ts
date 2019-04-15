import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BugHandlerComponent } from './bug-handler.component';


describe('NewBugComponent', () => {
  let component: BugHandlerComponent;
  let fixture: ComponentFixture<BugHandlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugHandlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
