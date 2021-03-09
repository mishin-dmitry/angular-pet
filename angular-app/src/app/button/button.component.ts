import { Component, OnInit, Input } from '@angular/core';

type TButtonColor = 'dangerous' | 'default' | 'success' | 'primary' | 'warning';
type TButtonSize = 'large' | 'default' | 'small';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text?: string;
  @Input() color?: TButtonColor = 'default';
  @Input() size?: TButtonSize = 'default';
  @Input() disabled?: boolean = false;
  @Input() active?: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  get buttonTheme(): TButtonColor {
    return this.color as TButtonColor;
  }

  get buttonSize(): TButtonSize {
    return this.size as TButtonSize;
  }

  get isDisabled(): boolean {
    return this.disabled as boolean;
  }

  get isActive(): boolean {
    return this.active as boolean;
  }
}
