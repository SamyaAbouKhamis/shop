import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClient, HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { OrderService } from '../order.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,ReactiveFormsModule,
  
   
    HttpClientModule,
    HttpClientJsonpModule],

})

export class LoginPage   {

  selectedCountryCode: string = "+1"; // Default country code
  phoneNumber: string = ""; // Phone number input

  countries: { code: string, name: string }[] = [];
  selectedCountry!: string;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.countries = this.orderService.getCountries();
  }
}




