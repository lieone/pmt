import { Injectable } from '@angular/core';

interface IntervalOptions {
  time: number;
  callback(timeLeft: number): void;
}

@Injectable({
  providedIn: 'root'
})
export class PomodoroTimerService {
  private intervalId: any;
  constructor() { }

  startTimer(timeout: number, interval?: IntervalOptions): Promise<void> {
    if (interval) {
      let timeLeft = timeout;
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
      }, timeout);
    });
  }

}
