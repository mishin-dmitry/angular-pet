import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  template: ` <p>tooltip works!</p> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
