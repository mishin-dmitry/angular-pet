import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from '@app/product-page/product-page.component';
import { CatalogPageComponent } from './catalog-page.component';

export const routes: Routes = [
  {
    path: 'catalog',
    component: CatalogPageComponent,
  },
  {
    path: 'catalog/:id',
    component: ProductPageComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogPageRouterModule {}
