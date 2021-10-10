import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { interval, Observable, Subject } from 'rxjs';
import { map, shareReplay, takeUntil, tap } from 'rxjs/operators';


interface ITimeComponents {
  secondsToDday: number;
  minutesToDday: number;
  hoursToDday: number;
  daysToDday: number;
}


@Component({
  selector: 'date-time-countdown',
  templateUrl: './date-time-countdown.component.html',
  styleUrls: ['./date-time-countdown.component.scss']
})
export class DateTimeCountdownComponent implements OnInit {
  @Input()
  public targetDateTime!: Date;

  /**
   * Accepts standard CSS color properties
   */
  @Input()
  public boxBgColor: string = '#FFFFFF';

  @Output()
  public countdownComplete: EventEmitter<boolean> = new EventEmitter<boolean>();

  public timeLeft$: Observable<ITimeComponents>;
  private timerKillTrigger: Subject<void> = new Subject();
  private countdownFinished: Subject<boolean> = new Subject();

  constructor() {
    this.timeLeft$ = interval(1000).pipe(
      map(() => this.calcDateDiff(this.targetDateTime)),
      tap(()=> {
        if(new Date().getTime() >= this.targetDateTime.getTime()) {
          this.timerKillTrigger.next();
          this.countdownFinished.next(true);
          this.countdownFinished.complete();
        }
      }),
      shareReplay(1),
      takeUntil(this.timerKillTrigger)
    )
  }

  ngOnInit(): void {
    this.countdownFinished.pipe(
      shareReplay(1)
    ).subscribe(
      () => {
        this.countdownComplete.emit(true);
      }
    )
  }

  calcDateDiff(endDay: Date): ITimeComponents {
    const dDay = endDay.valueOf();

    const milliSecondsInASecond = 1000;
    const hoursInADay = 24;
    const minutesInAnHour = 60;
    const secondsInAMinute = 60;

    const timeDifference = dDay - Date.now();

    const daysToDday = Math.floor(
      timeDifference /
      (milliSecondsInASecond * minutesInAnHour * secondsInAMinute * hoursInADay)
    );

    const hoursToDday = Math.floor(
      (timeDifference /
        (milliSecondsInASecond * minutesInAnHour * secondsInAMinute)) %
      hoursInADay
    );

    const minutesToDday = Math.floor(
      (timeDifference / (milliSecondsInASecond * minutesInAnHour)) %
      secondsInAMinute
    );

    const secondsToDday =
      Math.floor(timeDifference / milliSecondsInASecond) % secondsInAMinute;

    return { secondsToDday, minutesToDday, hoursToDday, daysToDday };
  }

}
