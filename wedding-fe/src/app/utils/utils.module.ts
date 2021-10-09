import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateTimeCountdownComponent } from './date-time-countdown/date-time-countdown.component';


@NgModule({
  declarations: [ DateTimeCountdownComponent ],
  imports: [
    CommonModule
  ],
  exports: [
    DateTimeCountdownComponent
  ],
})
export class UtilsModule {
}
