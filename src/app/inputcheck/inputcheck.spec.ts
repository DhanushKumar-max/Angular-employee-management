import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Inputcheck } from './inputcheck';

describe('Inputcheck', () => {
  let component: Inputcheck;
  let fixture: ComponentFixture<Inputcheck>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Inputcheck],
    }).compileComponents();

    fixture = TestBed.createComponent(Inputcheck);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
