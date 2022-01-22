import { Component } from '@angular/core';
import { IProduct } from './types/card';
import { products } from './data/product.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-app';
  products: Array<IProduct> = products;
  inCart: Array<IProduct> = [];
}
