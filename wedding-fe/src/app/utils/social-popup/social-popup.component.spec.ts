import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialPopupComponent } from './social-popup.component';

describe('SocialPopupComponent', () => {
  let component: SocialPopupComponent;
  let fixture: ComponentFixture<SocialPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
