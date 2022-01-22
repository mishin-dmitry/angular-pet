import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { TooltipWithIconComponent } from './tooltip-with-icon/tooltip-with-icon.component';
import { BadgeModule } from './badge/badge.module';
import { RatingModule } from './rating/rating.module';
import { ButtonModule } from './button/button.module';
import { ButtonIconComponent } from './button-icon/button-icon.component';
import { MenuModule } from './menu/menu.module';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { CatalogComponent } from './catalog/catalog.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TooltipWithIconComponent,
    ButtonIconComponent,
    DropdownMenuComponent,
    CatalogComponent,
  ],
  imports: [BrowserModule, BadgeModule, RatingModule, ButtonModule, MenuModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
