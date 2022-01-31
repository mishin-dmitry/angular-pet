import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-badge',
  template: ` <div class="badge"><ng-content></ng-content></div> `,
  styleUrls: ['./badge.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeComponent implements OnInit {
  @Input() text: string;

  constructor() {}

  ngOnInit(): void {}
}
