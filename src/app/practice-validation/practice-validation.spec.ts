import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PracticeValidation } from './practice-validation';

describe('PracticeValidation', () => {
  let component: PracticeValidation;
  let fixture: ComponentFixture<PracticeValidation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticeValidation],
    }).compileComponents();

    fixture = TestBed.createComponent(PracticeValidation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
