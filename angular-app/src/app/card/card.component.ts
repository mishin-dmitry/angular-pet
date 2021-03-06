import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Input,
  LOCALE_ID,
  OnInit,
} from '@angular/core';
import { IProduct, IPrice } from '../types/card';
import { getLocaleId, getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {
  @Input() product: IProduct;
  @Input() addProductInCart: (product: IProduct) => void;

  isFavorite = false;
  currentLocale = getLocaleId(this.locale);

  constructor(@Inject(LOCALE_ID) public locale: string) {}

  ngOnInit(): void {}

  onToggleFavorite(event: MouseEvent): void {
    event.stopPropagation();

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
