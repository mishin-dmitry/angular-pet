import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-not-found-page',
  template: `
    <h1>404</h1>
    <h2>Страница не найдена</h2>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
