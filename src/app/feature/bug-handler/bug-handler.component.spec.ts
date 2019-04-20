import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BugHandlerComponent } from './bug-handler.component';
import { ReactiveFormsModule } from '@angular/forms';


describe('NewBugComponent', () => {
  let component: BugHandlerComponent;
  let fixture: ComponentFixture<BugHandlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BugHandlerComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
