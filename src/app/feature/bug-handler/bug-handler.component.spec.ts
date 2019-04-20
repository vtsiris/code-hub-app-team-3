import { AppModule } from './../../app.module';
import { ShowBugsComponent } from './show-bugs/show-bugs.component';
import { BugCommentsComponent } from './bug-comments/bug-comments.component';
import { MaterialModule } from './../../core/modules/material.module';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { BugHandlerComponent } from './bug-handler.component';
import { By } from '@angular/platform-browser';


describe('NewBugComponent', () => {
  let component: BugHandlerComponent;
  let fixture: ComponentFixture<BugHandlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BugHandlerComponent,
        BugCommentsComponent,
        ShowBugsComponent ],
      imports: [ReactiveFormsModule, MaterialModule, ]
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

fdescribe('User Story 9', () => {
  let component: BugHandlerComponent;
  let fixture: ComponentFixture<BugHandlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
      ],
      imports: [AppModule]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should validate that the form is invalid if no data entered', () => {
    component.ngOnInit();
    component.myForm.controls['description'].setValue('');
    expect(component.myForm.valid).toBeFalsy();
  });

  it('should validate that the form is valid by having the minimum required fields', () => {
    component.ngOnInit();
    component.myForm.controls['title'].setValue('146');
    expect(component.myForm.controls['title'].valid).toBeTruthy();
  });

  it('Set the Reporter to “QA” and validate that the form is invalid', () => {
    component.ngOnInit();
    component.myForm.controls['reporter'].setValue('QA');
    expect(component.myForm.valid).toBeFalsy();
  });

  it('Set the Reporter to “QA”, set any Status and validate that the form is Valid', () => {
    component.ngOnInit();
    component.myForm.controls.title.setValue('aaa');
    component.myForm.controls.description.setValue('a');
    component.myForm.controls.priority.setValue(1);
    component.myForm.controls.reporter.setValue('QA');
    component.myForm.controls.status.setValue('Done');
    expect(component.myForm.valid).toBeTruthy();
  });
});
