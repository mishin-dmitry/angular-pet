import { IToggleItem } from './../toggle/toggle.component';
import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { IProduct } from '../types/card';

interface CartProduct {
  count: number;
  product: IProduct;
}

const SHOW_ALL = 0;
const AVAILABLE = 1;
const SALE = 2;

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit, OnChanges {
  @Input() products: IProduct[];

  inCart: CartProduct[];

  filterOptions: IToggleItem[] = [
    {
      value: SHOW_ALL,
      caption: 'Показать все',
    },
    {
      value: AVAILABLE,
      caption: 'В наличии',
    },
    {
      value: SALE,
      caption: 'Со скидкой',
    },
  ];

  filteredProducts: IProduct[];

  private __activeFilter: IToggleItem;

  constructor() {
    this.inCart = [];
    this.filteredProducts = this.products || [];
    this.__activeFilter = this.filterOptions[0];

    this.addProductInCart = this.addProductInCart.bind(this);
    this.changeFilter = this.changeFilter.bind(this);
  }

  ngOnInit(): void {}

  ngOnChanges({ products }: SimpleChanges): void {
    if (products.currentValue !== this.filteredProducts) {
      this.filteredProducts = products.currentValue;
    }
  }

  private getProductFromCart(productId: number): CartProduct | null {
    const productFromCart = this.inCart.filter(
      (item: CartProduct) => item.product.id === productId
    );

    return !productFromCart.length ? null : productFromCart[0];
  }

  public addProductInCart(product: IProduct): void {
    const productFromCart = this.getProductFromCart(product.id);

    if (!productFromCart) {
      this.inCart.push({ count: 1, product });
    } else {
      productFromCart.count += 1;
    }

    // TODO remove, show that products add in cart
    console.log(this.inCart);
  }

  get activeFilter(): IToggleItem {
    return this.__activeFilter;
  }

  public changeFilter(newValue: IToggleItem) {
    this.__activeFilter = newValue;

    switch (newValue.value) {
      case SHOW_ALL:
        this.filteredProducts = this.products;
        break;

      case AVAILABLE:
        this.filteredProducts = this.products.filter(
          (product: IProduct) => product.deliveryOptions.available
        );
        break;

      case SALE:
        this.filteredProducts = this.products.filter(
          (product: IProduct) => product.sale
        );
        break;

      default:
        break;
    }
  }
}
