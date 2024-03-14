import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SignupPage } from '../signup/signup.page';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.page.html',
  styleUrls: ['./navbar.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,SignupPage]
})
export class NavbarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
