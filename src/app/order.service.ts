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
}