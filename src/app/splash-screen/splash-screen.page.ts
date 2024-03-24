import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.page.html',
  styleUrls: ['./splash-screen.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class SplashScreenPage implements OnInit {

  constructor(public router:Router) { 
setTimeout(() => {
  this.router.navigateByUrl('home')
}, 2000);
  }
  ngOnInit() {
  }

}
