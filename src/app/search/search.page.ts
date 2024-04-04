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
  imports: [IonicModule, CommonModule, FormsModule, OrderPage, RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SearchPage implements OnInit {

  searched!: boolean;
  loading!: boolean;
  constructor(private orderhService: OrderService) { }
  ngOnInit(): void {
  }

  onSearchChange(event: any) {
    this.orderhService.changeSearchInput(event.detail.value);
  }

  onSearch() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.searched = true;
    }, 500);
  }
}



