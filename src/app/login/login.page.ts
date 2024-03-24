import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule } from '@ionic/angular';
import * as intlTelInput from 'intl-tel-input';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginPage implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  selectedCountry: string = '+1'; // Default country code
  phoneNumber: string = '';

  constructor(public alertController: AlertController) {}

  async submitPhoneNumber() {
    const alert = await this.alertController.create({
      header: 'Submitted Phone Number',
      message:` Country Code: ${this.selectedCountry}<br>Phone Number: ${this.phoneNumber}`,
      buttons: ['OK']
    });
    await alert.present();
  }
}
  



