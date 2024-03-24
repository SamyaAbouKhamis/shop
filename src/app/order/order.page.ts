import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { OrderService } from '../order.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterLink,NgFor],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class OrderPage implements OnInit {
  // searchText:any;
  // food=[
  //   {name:'salad',img: 'assets/images/food2.jpg'},
  //   {name:'Beef Burger',img: 'assets/images/food1.jpg'},
  //   {name:'chicken Burger',img: 'assets/images/food3.jpg'},
  //   {name:'cheese Burger',img: 'assets/images/food4.jpg'},
  //   {name:'hamburger',img: 'assets/images/food5.jpg'}
  // ]
  //   results: any;
  //   data: any;
  //   event:any;
  
    
  //   handleInput(event:any) {
  //     console.log(event)
  //     const query = event.target.value.toLowerCase();
  //     this.results = this.data.filter((d:any) => d.toLowerCase().indexOf(query) > -1);
  //   } 
  
  searchInput: string = '';
  subscription!: Subscription;

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.subscription = this.orderService.currentSearchInput.subscribe(input => {
      this.searchInput = input;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
