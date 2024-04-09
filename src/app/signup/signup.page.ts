import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonIcon } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterLink,ReactiveFormsModule, HttpClientModule,
    HttpClientJsonpModule]
 
  
})
export class SignupPage implements OnInit {
countries:any=[
  {
  code:'+963',
  name:'syria'
  },
  {
    code:'963+',
    name:'syria',
  },
  {
    code:'963+',
    name:'syria',
  },
  {
    code:'963+',
    name:'syria',
  },
  {
    code:'963+',
    name:'syria',
  }
]
  constructor() { }

  ngOnInit() {
  }

}
