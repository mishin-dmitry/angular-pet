import { IProduct } from './../types/card';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { products } from '@app/catalog-page/product.data';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductPageComponent implements OnInit {
  private __productId: string;
  public product: IProduct | null;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.__productId = this.route.snapshot.params['id'];
    this.product = null;
  }

  ngOnInit(): void {
    this.product = products.filter(
      (product) => product.id === +this.__productId
    )[0];

    if (!this.product) {
      this.router.navigate(['not-found']);
    }
  }
}
