import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateTimeCountdownComponent } from './date-time-countdown/date-time-countdown.component';
import { ExtendedModule } from '@angular/flex-layout';


@NgModule({
  declarations: [ DateTimeCountdownComponent ],
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
