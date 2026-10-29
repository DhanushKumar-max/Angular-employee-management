import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PracticeTask } from './practice-task';

describe('PracticeTask', () => {
  let component: PracticeTask;
  let fixture: ComponentFixture<PracticeTask>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticeTask],
    }).compileComponents();

    fixture = TestBed.createComponent(PracticeTask);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
