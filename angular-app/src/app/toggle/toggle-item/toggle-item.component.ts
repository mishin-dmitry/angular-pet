import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle-item',
  templateUrl: './toggle-item.component.html',
  styleUrls: ['./toggle-item.component.scss'],
})
export class ToggleItemComponent implements OnInit {
  @Input() value: number;
  @Input() caption: string;
  @Input() isSelected: boolean;
  @Output() clicked: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public click(): void {
    this.clicked.emit(this.value);
  }
}
