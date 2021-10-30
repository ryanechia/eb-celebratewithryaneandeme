import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateTimeCountdownComponent } from './date-time-countdown/date-time-countdown.component';
import { ExtendedModule } from '@angular/flex-layout';
import { SocialPopupComponent } from './social-popup/social-popup.component';
import { MaterialElevationDirective } from './material-elevation.directive';


@NgModule({
  declarations: [
    DateTimeCountdownComponent,
    SocialPopupComponent,
    MaterialElevationDirective
  ],
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
