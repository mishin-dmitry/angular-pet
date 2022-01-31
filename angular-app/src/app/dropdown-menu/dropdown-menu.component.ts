import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownMenuComponent implements OnInit, OnChanges {
  @Input() isOpen?: boolean;

  _isDropdownOpened: boolean;

  constructor() {
    this._isDropdownOpened = this.isOpen ?? false;
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    this._isDropdownOpened = this.isOpen as boolean;
  }

  get isListOpened(): boolean {
    return this._isDropdownOpened;
  }

  onButtonClick(e: MouseEvent): void {
    this._isDropdownOpened = !this._isDropdownOpened;
  }
}
