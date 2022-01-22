import { Component, Inject, Input, LOCALE_ID, OnInit } from '@angular/core';
import { IProduct, IPrice } from '../types/card';
import { getLocaleId, getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() product: IProduct;
  isFavorite = false;
  currentLocale = getLocaleId(this.locale);

  constructor(@Inject(LOCALE_ID) public locale: string) {}

  ngOnInit(): void {}

  onToggleFavorite(): void {
    this.isFavorite = !this.isFavorite;
  }

  get priceByLocale(): IPrice {
    return this.product.price[this.currentLocale];
  }

  get priceWithDiscount(): number {
    const { discount, value } = this.priceByLocale;

    return discount ? Math.round(value - value * discount) : value;
  }

  get currency(): string {
    console.log(this.currentLocale);
    return getCurrencySymbol(this.currencyCode, 'narrow');
  }

  get currencyCode(): string {
    return this.product.price[this.currentLocale].code;
  }

  get discount(): number | undefined {
    return this.product.price[this.currentLocale].discount;
  }

  get price(): number {
    return this.product.price[this.currentLocale].value;
  }
}
