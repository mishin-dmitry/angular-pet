import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../types/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls:['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() product!: IProduct;
  isFavorite = false;

  constructor() {}

  ngOnInit(): void {
  }

  onToggleFavorite(): void {
    this.isFavorite = !this.isFavorite;
  }

}
