import { Component, OnInit, Input } from '@angular/core';
import { IBadge } from '../types/card';

@Component({
  selector: 'app-badge',
  template: `
    <div [style.background-color]="badge?.color" class="badge">
      {{ badge?.text }}
    </div>
  `,
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {
  @Input() badge?: IBadge;

  constructor() {}

  ngOnInit(): void {
  }

}
