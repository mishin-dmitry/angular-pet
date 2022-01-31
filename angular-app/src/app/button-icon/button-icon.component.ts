import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-button-icon',
  templateUrl: './button-icon.component.html',
  styleUrls: ['./button-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonIconComponent implements OnInit {
  @Input() isActive: boolean;

  constructor() {}

  ngOnInit(): void {}
}
