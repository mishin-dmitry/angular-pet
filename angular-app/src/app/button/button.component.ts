import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button class="button">
      {{ text }}
    </button>
  `,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text: string;

  constructor() { }

  ngOnInit(): void {
  }

}
