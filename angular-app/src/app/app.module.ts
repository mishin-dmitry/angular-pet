import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { TooltipWithIconComponent } from './tooltip-with-icon/tooltip-with-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemCardComponent,
    TooltipWithIconComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
