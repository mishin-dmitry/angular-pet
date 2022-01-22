import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../types/card';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
  @Input() products: IProduct[];
  constructor() {}

  ngOnInit(): void {}
}
