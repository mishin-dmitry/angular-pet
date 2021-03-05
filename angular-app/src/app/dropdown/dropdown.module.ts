import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { ButtonModule } from '../button/button.module';



@NgModule({
  declarations: [DropdownComponent],
  imports: [
    CommonModule,
    ButtonModule,
  ]
})
export class DropdownModule { }
