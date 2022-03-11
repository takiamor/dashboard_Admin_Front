import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssesmentAddEditComponent } from './assesment-add-edit.component';

describe('AssesmentAddEditComponent', () => {
  let component: AssesmentAddEditComponent;
  let fixture: ComponentFixture<AssesmentAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssesmentAddEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssesmentAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
