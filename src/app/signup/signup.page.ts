import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonModal, IonicModule, ModalController } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { Subscription, interval } from 'rxjs';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { PhoneNumbersPage } from '../phone-numbers/phone-numbers.page';
declare var intlTelInput: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink, ReactiveFormsModule, HttpClientModule, RouterLink,
    HttpClientJsonpModule,PhoneNumbersPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class SignupPage  {
  // @ViewChild('phoneInput') phoneInput!: ElementRef;
  // ngAfterViewInit(): void {
  //   intlTelInput(this.phoneInput.nativeElement, {
  //     utilsScript:
  //       'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js',
  //     separateDialCode: true,

  //     preferredCountries: ['us', 'gb', 'br', 'ru', 'cn'],
  //     customPlaceholder: function (
  //       selectedCountryPlaceholder: string,
  //       selectedCountryData: any
  //     ) {
  //       return 'e.g. ' + selectedCountryPlaceholder;
  //     },
  //   });
    
  // }
  countdown: number = 60; // Countdown starts from 60 seconds
 
  customPlaceholder(){

  }

  private countdownSubscription!: Subscription;
  private GetItems() {
    const count = this.items.length = 1;
    for (let i = 0; i < 50; i++) {
      this.items.push(`Items ${count + i}`)
    }
  };
  ionInfiniteScroll(ev: any) {
    this.GetItems();
    (ev as InfiniteScrollCustomEvent).target.complete()
  }

  items: any = [];
  phoneForm!: FormGroup;
  formData!: string;
  searched!: boolean;
  loading!: boolean;
  showSecondSection: boolean = true;

  countries = [
    { value: "+31", label: "+31 (Netherlands)" },
    { value: "+1", label: "+1 (United States)" },
    { value: "+44", label: "+44 (United Kingdom)" }
  ];




  constructor(private fb: FormBuilder, private modalController: ModalController) { }


  closeModal() {
    this.modalController.dismiss();
  }

  startCountdown() {
    this.countdownSubscription = interval(1000).subscribe(() => {
      if (this.countdown > 0) {
        this.countdown--;
      } else {
        this.countdownSubscription.unsubscribe(); // Stop the countdown when it reaches 0
      }
    })
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.searched = true;
    }, 10000);;
  }
  onContinueClick() {
    this.showSecondSection = false;
  }
  ngOnDestroy() {
    // Unsubscribe from interval when component is destroyed
    if (this.countdownSubscription) {
      this.countdownSubscription.unsubscribe();
    }
  }
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  ngOnInit() {
    this.GetItems();
    this.phoneForm = this.fb.group({
      countryCode: ['+31'],
      nationalNumber: ['', Validators.required],
    });

  }
  isNationalNumberValid(): boolean {
    const nationalNumberControl = this.phoneForm.get('nationalNumber');
    const nationalNumberValue = nationalNumberControl?.value;
    return (
      nationalNumberControl &&
      nationalNumberControl.valid &&
      nationalNumberControl.value.startsWith('09') &&
      nationalNumberValue.length < 10
    );
  }

}

