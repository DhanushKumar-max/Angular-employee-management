import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormCheckDebouncing } from './form-check-debouncing';

describe('FormCheckDebouncing', () => {
  let component: FormCheckDebouncing;
  let fixture: ComponentFixture<FormCheckDebouncing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCheckDebouncing],
    }).compileComponents();

    fixture = TestBed.createComponent(FormCheckDebouncing);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
