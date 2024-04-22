import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonMenuButton, IonIcon, IonInput, IonItem, IonButtons, IonButton, IonMenu } from '@ionic/angular/standalone';
import { NavbarPage } from '../navbar/navbar.page';
import { HttpClientModule } from '@angular/common/http';
import { OrderPage } from '../order/order.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { PhoneNumbersPage } from '../phone-numbers/phone-numbers.page';


register();

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,NavbarPage,CommonModule,HttpClientModule,OrderPage
    ,IonButtons,IonButton,IonMenu,
    IonMenuButton,IonIcon,IonInput,IonItem,RouterLink,PhoneNumbersPage],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage {
 


 constructor(){}
}
