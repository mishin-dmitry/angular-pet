import { ActivatedRoute, Router } from '@angular/router';
import { products } from './product.data';
import { IToggleItem } from '../toggle/toggle.component';
import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy,
} from '@angular/core';
import { IProduct } from '../types/card';

interface CartProduct {
  count: number;
  product: IProduct;
}

enum filterOptions {
  SHOW_ALL,
  AVAILABLE,
  SALE,
}

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogPageComponent implements OnInit, OnChanges {
  inCart: CartProduct[];

  filterOptions: IToggleItem[] = [
    {
      value: filterOptions.SHOW_ALL,
      caption: 'Показать все',
    },
    {
      value: filterOptions.AVAILABLE,
      caption: 'В наличии',
    },
    {
      value: filterOptions.SALE,
      caption: 'Со скидкой',
    },
  ];

  filteredProducts: IProduct[];

  private __activeFilter: IToggleItem;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.inCart = [];
    this.filteredProducts = products || [];
    this.__activeFilter = this.filterOptions[0];

    this.addProductInCart = this.addProductInCart.bind(this);
    this.changeFilter = this.changeFilter.bind(this);
  }

  ngOnInit(): void {
    const filterId = this.route.snapshot.queryParams['filter'];
    const activeFilter = this.filterOptions.filter(
      (filter) => filter.value === +filterId
    )[0];

    if (activeFilter && this.__activeFilter !== activeFilter) {
      this.changeFilter(activeFilter);
    }
  }

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
  }

  get activeFilter(): IToggleItem {
    return this.__activeFilter;
  }

  public changeFilter(newValue: IToggleItem) {
    this.router.navigate(['/catalog'], {
      queryParams: { filter: newValue.value },
    });

    this.__activeFilter = newValue;

    switch (newValue.value) {
      case filterOptions.SHOW_ALL:
        this.filteredProducts = products;
        break;

      case filterOptions.AVAILABLE:
        this.filteredProducts = products.filter(
          (product: IProduct) => product.deliveryOptions.available
        );
        break;

      case filterOptions.SALE:
        this.filteredProducts = products.filter(
          (product: IProduct) => product.sale
        );
        break;

      default:
        break;
    }
  }
}
