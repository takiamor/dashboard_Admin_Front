import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCandidateComponent } from './add-edit-candidate.component';
import { CandidateServiceService } from 'src/app/Service/candidate-service.service';

describe('AddEditCandidateComponent', () => {
  let component: AddEditCandidateComponent;
  let fixture: ComponentFixture<AddEditCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditCandidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});