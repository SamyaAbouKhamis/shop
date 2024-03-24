import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OrderPage } from '../order/order.page';
import { OrderService } from '../order.service';
import { KeyedWrite } from '@angular/compiler';
import { RouterLink } from '@angular/router';





@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,OrderPage,RouterLink],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})

export class SearchPage implements OnInit {

  
  constructor(private orderhService: OrderService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSearchChange(event: any) {
    this.orderhService.changeSearchInput(event.detail.value);
  }


}
  


