import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BugHandlerComponent } from './bug-handler.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/core/modules/material.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('NewBugComponent', () => {
  let component: BugHandlerComponent;
  let fixture: ComponentFixture<BugHandlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BugHandlerComponent],
      imports: [ReactiveFormsModule, MaterialModule, HttpClientModule, RouterTestingModule, BrowserAnimationsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fdescribe('User story 9', () => {
    it('Should validate that the form is invalid if no data entered', () => {
      component.ngOnInit();
      expect(component.myForm.invalid).toBeTruthy();
    });

    it('Should validate that the form is valid by having the minimum required fields', () => {
      component.ngOnInit();
      component.myForm.controls.title.setValue('aaa');
      component.myForm.controls.description.setValue('a');
      component.myForm.controls.reporter.setValue('PO');
      component.myForm.controls.priority.setValue(1);
      expect(component.myForm.valid).toBeTruthy();
    });

    it('Should set the Reporter to “QA” and validate that the form is invalid', () => {
      component.ngOnInit();
      component.myForm.controls.title.setValue('aaa');
      component.myForm.controls.description.setValue('a');
      component.myForm.controls.reporter.setValue('QA');
      component.myForm.controls.priority.setValue(1);
      expect(component.myForm.invalid).toBeTruthy();
    });

    it('Should set the Reporter to “QA”, set any Status and validate that the form is valid', () => {
      component.ngOnInit();
      component.myForm.controls.title.setValue('aaa');
      component.myForm.controls.description.setValue('a');
      component.myForm.controls.priority.setValue(1);
      component.myForm.controls.reporter.setValue('QA');
      component.myForm.controls.status.setValue('Done');
      expect(component.myForm.valid).toBeTruthy();
    });

  });
});
