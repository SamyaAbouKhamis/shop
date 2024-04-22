import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
declare var intlTelInput: any;


@Component({
  selector: 'app-phone-numbers',
  templateUrl: './phone-numbers.page.html',
  styleUrls: ['./phone-numbers.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PhoneNumbersPage implements AfterViewInit {
  @ViewChild('phoneInput') phoneInput!: ElementRef;
  phoneNumber: string | undefined;
  selectedOption: string | undefined;

  ngAfterViewInit(): void {
    intlTelInput(this.phoneInput.nativeElement, {
      utilsScript:
        'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js',
      separateDialCode: true,

      preferredCountries: ['us', 'gb', 'br', 'ru', 'cn'],
      customPlaceholder: function (
        selectedCountryPlaceholder: string,
        selectedCountryData: any
      ) {
        return 'e.g. ' + selectedCountryPlaceholder;
      },
    });
  }

}
