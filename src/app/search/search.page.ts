import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OrderPage } from '../order/order.page';
import { OrderService } from '../order.service';
import { KeyedWrite } from '@angular/compiler';





@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,OrderPage]
})

export class SearchPage implements OnInit {

 ngOnInit(): void {
   
 }
}
  


