import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingModule } from '../rating/rating.module';
import { ButtonModule } from '../button/button.module';
import { BadgeModule } from '../badge/badge.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, RatingModule, ButtonModule, BadgeModule],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'ru',
    },
  ],
})
export class CardModule {}
