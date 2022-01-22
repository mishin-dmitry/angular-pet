import { Component, Input, OnInit } from '@angular/core';

interface IMenuItem {
  id: number;
  caption: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Input() menuItems?: Array<IMenuItem>;
  @Input() isMenuVisible?: boolean;

  constructor() {}

  ngOnInit(): void {}

  // TODO потом переделать как на ангуляре
  get menuItemElements(): Array<string> {
    return (
      this.menuItems?.map((item: IMenuItem) => '<li>${item.caption}</li>') ?? []
    );
  }

  get isVisible(): boolean {
    return this.isMenuVisible as boolean;
  }
}
