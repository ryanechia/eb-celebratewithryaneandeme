import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateTimeCountdownComponent } from './date-time-countdown/date-time-countdown.component';
import { ExtendedModule } from '@angular/flex-layout';
import { SocialPopupComponent } from './social-popup/social-popup.component';
import { MaterialElevationDirective } from './material-elevation.directive';
import { FlipbookComponent } from './flipbook/flipbook.component';
import { MatRippleModule } from '@angular/material/core';


@NgModule({
  declarations: [
    DateTimeCountdownComponent,
    SocialPopupComponent,
    MaterialElevationDirective,
    FlipbookComponent
  ],
  imports: [
    CommonModule,
    ExtendedModule,
    MatRippleModule
  ],
  exports: [
    DateTimeCountdownComponent,
    FlipbookComponent
  ],
})
export class UtilsModule {
}
