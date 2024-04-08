import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'navbar',
    loadComponent: () => import('./navbar/navbar.page').then( m => m.NavbarPage)
  },
  {
    path: 'signup',
    loadComponent: () => import('./signup/signup.page').then( m => m.SignupPage)
  },
  {
    path: 'order',
    loadComponent: () => import('./order/order.page').then( m => m.OrderPage)
  },
  {
    path: 'cart',
    loadComponent: () => import('./cart/cart.page').then( m => m.CartPage)
  },
  {
    path: 'item-details',
    loadComponent: () => import('./item-details/item-details.page').then( m => m.ItemDetailsPage)
  },
  {
    path: 'splash-screen',
    loadComponent: () => import('./splash-screen/splash-screen.page').then( m => m.SplashScreenPage)
  },
  {
    path: 'search',
    loadComponent: () => import('./search/search.page').then( m => m.SearchPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
 
];
