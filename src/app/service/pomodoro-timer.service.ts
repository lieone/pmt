import { Injectable } from '@angular/core';
import { FocusOnEndService } from './focus-on-end.service';

interface IntervalOptions {
  time: number;
  callback(timeLeft: number): void;
}

@Injectable({
  providedIn: 'root'
})
export class PomodoroTimerService {

  private intervalId: any;

  constructor(private focusOnEnd: FocusOnEndService) { }

  startTimer(timeout: number, interval?: IntervalOptions): Promise<void> {
    if (interval) {
      let timeLeft = timeout;
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }
      this.intervalId = setInterval(() => {
        timeLeft -= interval.time;
        interval.callback(timeLeft);
      }, interval.time);
    }
    return new Promise((res) => {
      setTimeout(() => {
        if (this.intervalId) {
          clearInterval(this.intervalId);
        }
        res();
        this.focusOnEnd.pomodoroEnd();
      }, timeout);
    });
  }

}
