import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormValidations } from './form-validations';

describe('FormValidations', () => {
  let component: FormValidations;
  let fixture: ComponentFixture<FormValidations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormValidations],
    }).compileComponents();

    fixture = TestBed.createComponent(FormValidations);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
