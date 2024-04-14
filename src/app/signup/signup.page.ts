import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonIcon } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { PhoneNumber, isValidPhoneNumber, parsePhoneNumber} from 'libphonenumber-js';
import intlTelInput from 'intl-tel-input';

import { PhoneNumbersPage } from '../phone-numbers/phone-numbers.page';

export interface Profile {
  firstName?: string;
  lastName?: string;
  org?: string;
  orgTitle?: string;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  zipCode?: string;
  stateProvince?: string;
  country?: string;
  tel?: string;
};

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterLink,ReactiveFormsModule, HttpClientModule,
    HttpClientJsonpModule,PhoneNumbersPage]
 
  
})
export class SignupPage implements OnInit {

  phoneNumbersPage:any[]=[
    { text:'', code: '+1', country: 'US' },
    { text: '🇨🇦 +1   Canada', code: '+1', country: 'CA' },
    { text: '🇷🇺 +7   Russia', code: '+7', country: 'RU' },
    { text: '🇪🇬 +20  Egypt', code: '+20', country: 'EG' },]
  profile: Profile = {};
  separateDialCode!:boolean
  constructor() { }
  
  ngOnInit() { }
  
  countryCode = "";
  parsePhoneNumber() {
    this.countryCode = "";
    if (this.profile.tel && isValidPhoneNumber(this.profile.tel)) {
      const phoneNumber = parsePhoneNumber(this.profile.tel)
      if (phoneNumber?.country) {
        this.countryCode = phoneNumber.country;
      }
    }
  }

}