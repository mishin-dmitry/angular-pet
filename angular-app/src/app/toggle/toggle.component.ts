import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

export interface IToggleItem {
  value: number;
  caption: string;
}

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent implements OnInit, OnChanges {
  @Input() options: IToggleItem[];
  @Input() value: IToggleItem;
  @Input() onChange: (newValue: IToggleItem) => void;

  currentValue: IToggleItem | null;

  ngOnInit(): void {}

  ngOnChanges({ value }: SimpleChanges): void {
    if (value.currentValue !== this.currentValue) {
      this.currentValue = value.currentValue;
    }
  }
}
