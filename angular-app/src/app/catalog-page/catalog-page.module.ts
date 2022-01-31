import { NgModule } from '@angular/core';
import { ToggleModule } from '../toggle/toggle.module';
import { CardModule } from '../card/card.module';
import { CatalogPageRouterModule } from './catalog-page-router.module';

@NgModule({
  declarations: [],
  imports: [CardModule, ToggleModule, CatalogPageRouterModule],
  exports: [CatalogPageRouterModule],
  providers: [],
})
export class CatalogModule {}
