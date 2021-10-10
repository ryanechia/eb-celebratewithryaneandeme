import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateTimeCountdownComponent } from './date-time-countdown/date-time-countdown.component';
import { ExtendedModule } from '@angular/flex-layout';
import { SocialPopupComponent } from './social-popup/social-popup.component';


@NgModule({
  declarations: [ DateTimeCountdownComponent, SocialPopupComponent ],
  imports: [
    CommonModule,
    ExtendedModule
  ],
  exports: [
    DateTimeCountdownComponent
  ],
})
export class UtilsModule {
}
