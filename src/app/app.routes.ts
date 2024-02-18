import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'products', loadChildren: () => import('./products/products-routing.module').then(m => m.ProductsRoutingModule) },
  { path: 'signals', loadChildren: () => import('./signals/signals-routing.module').then(m => m.SignalsRoutingModule) },
  { path: '**', redirectTo: 'signals' }
];
