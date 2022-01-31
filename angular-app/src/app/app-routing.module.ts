import { NotFoundPageComponent } from '@app/not-found-page/not-found-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'catalog',
    pathMatch: 'full',
  },
  {
    path: 'catalog',
    loadChildren: () =>
      import('@app/catalog-page/catalog-page.module').then(
        (m) => m.CatalogModule
      ),
  },
  {
    path: 'not-found',
    component: NotFoundPageComponent,
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

export const options: ExtraOptions = {
  scrollPositionRestoration: 'enabled', // скролл наверх при переходе между страницами
};

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes, options)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

// routerLink вместо href, чтобы не перезагружалась страница
// routerLinkActive= "className", назначает класс, если ссылка активна
// [routerLinkActiveOptions]="{exact: true}" - полное совпадение пути
// [routerLink]="['/product', product.id]" - для динамичного роутера
// class ActivatedRoute - analog hoc withRouter, this.router.snapshot.params - хранит в себе динамические параметры
// this.router.navigate - тупа router.push
