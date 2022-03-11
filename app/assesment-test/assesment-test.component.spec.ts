import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssesmentTestComponent } from './assesment-test.component';

describe('AssesmentTestComponent', () => {
  let component: AssesmentTestComponent;
  let fixture: ComponentFixture<AssesmentTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssesmentTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssesmentTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
