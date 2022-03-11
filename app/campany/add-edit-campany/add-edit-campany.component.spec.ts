import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCampanyComponent } from './add-edit-campany.component';

describe('AddEditCampanyComponent', () => {
  let component: AddEditCampanyComponent;
  let fixture: ComponentFixture<AddEditCampanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditCampanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditCampanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
