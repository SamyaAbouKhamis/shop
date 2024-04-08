import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private searchInputSource = new BehaviorSubject<string>('');
  currentSearchInput = this.searchInputSource.asObservable();

  constructor() {}

  changeSearchInput(input: string) {
    this.searchInputSource.next(input);
  }



getCountries() {
  // You can replace this with an actual API call to fetch countries
  return [
    { code: 'us', name: 'United States' },
    { code: 'ca', name: 'Canada' },
    // Add more countries as needed
  ];
}
}