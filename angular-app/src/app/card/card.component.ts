import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../types/card';
import { EButtonsColor } from '../button/button.component';

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

  // TODO remove
  get buttonColor(): EButtonsColor {
    return EButtonsColor.success;
  }

  onToggleFavorite(): void {
    this.isFavorite = !this.isFavorite;
  }

}
