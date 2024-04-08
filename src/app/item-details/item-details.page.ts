import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnimationController, IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { register } from 'swiper/element';


register();

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.page.html',
  styleUrls: ['./item-details.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterLink],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class ItemDetailsPage implements OnInit {

  selectedSize: number | undefined;
  selectedColor: number | undefined;
  activeVariation: string | undefined;
 loader=true;

 searched=false;
  constructor(
    private animatioCntrl: AnimationController,
  ) { }

  ngOnInit() {
    this.activeVariation = 'size';
    setTimeout(() => {
      this.loader = false;
    this.searched=true;
    }, 900);
  }

  
 
  }




