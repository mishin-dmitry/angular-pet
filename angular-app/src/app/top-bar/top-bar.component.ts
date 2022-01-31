import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NavMenuLink, navMenuLinks } from '../utils/urls';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopBarComponent implements OnInit {
  public navMenuLinks: NavMenuLink[];

  constructor() {
    this.navMenuLinks = navMenuLinks;
  }

  ngOnInit(): void {}
}
