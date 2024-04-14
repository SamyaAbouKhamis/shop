import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhoneNumbersPage } from './phone-numbers.page';

describe('PhoneNumbersPage', () => {
  let component: PhoneNumbersPage;
  let fixture: ComponentFixture<PhoneNumbersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PhoneNumbersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
