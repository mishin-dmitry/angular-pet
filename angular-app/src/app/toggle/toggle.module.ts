import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleComponent } from './toggle.component';
import { ToggleItemComponent } from './toggle-item/toggle-item.component';

@NgModule({
  declarations: [ToggleComponent, ToggleItemComponent],
  imports: [CommonModule],
  exports: [ToggleComponent],
})
export class ToggleModule {}
