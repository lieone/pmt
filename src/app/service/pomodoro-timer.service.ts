import { Injectable, EventEmitter } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PomodoroTimerService {

  public timeLeft = new EventEmitter<number>();

  private timerSubscription: Subscription;

  constructor() { }

  startTimer(timeout: number): void {
    this.timeLeft.emit(timeout);
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
    this.timerSubscription = interval(1000)
    .pipe(
      take(timeout / 1000),
      map(count => timeout - ++count * 1000)
    ).subscribe(this.timeLeft);
  }

}
