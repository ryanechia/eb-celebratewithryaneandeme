import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateTimeCountdownComponent } from './date-time-countdown.component';

describe('DateTimeCountdownComponent', () => {
  let component: DateTimeCountdownComponent;
  let fixture: ComponentFixture<DateTimeCountdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateTimeCountdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateTimeCountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
