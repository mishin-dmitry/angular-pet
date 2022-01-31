import { NotFoundPageModule } from './not-found-page/not-found-page.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from '@app/app.component';
import { CardComponent } from '@app/card/card.component';
import { TooltipWithIconComponent } from '@app/tooltip-with-icon/tooltip-with-icon.component';
import { BadgeModule } from '@app/badge/badge.module';
import { RatingModule } from '@app/rating/rating.module';
import { ButtonModule } from '@app/button/button.module';
import { ButtonIconComponent } from '@app/button-icon/button-icon.component';
import { MenuModule } from '@app/menu/menu.module';
import { DropdownMenuComponent } from '@app/dropdown-menu/dropdown-menu.component';
import { CatalogPageComponent } from '@app/catalog-page/catalog-page.component';
import { CatalogModule } from '@app/catalog-page/catalog-page.module';
import { AppRoutingModule } from '@app/app-routing.module';
import { TopBarComponent } from '@app/top-bar/top-bar.component';
import { ProductPageComponent } from '@app/product-page/product-page.component';
import { ToggleModule } from '@app/toggle/toggle.module';
import { NotFoundPageComponent } from '@app/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TooltipWithIconComponent,
    ButtonIconComponent,
    DropdownMenuComponent,
    CatalogPageComponent,
    TopBarComponent,
    ProductPageComponent,
    NotFoundPageComponent,
  ],
  imports: [
    BrowserModule,
    BadgeModule,
    RatingModule,
    ButtonModule,
    MenuModule,
    CatalogModule,
    ToggleModule,
    AppRoutingModule,
    NotFoundPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
