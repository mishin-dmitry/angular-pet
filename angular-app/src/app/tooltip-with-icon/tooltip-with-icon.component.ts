import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip-with-icon',
  template: ` <p>tooltip-with-icon works!</p> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipWithIconComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
