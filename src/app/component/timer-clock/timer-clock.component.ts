import { Component, OnInit } from '@angular/core';
import { PomodoroTimerService } from '@app/service/pomodoro-timer.service';

@Component({
  selector: 'app-timer-clock',
  templateUrl: './timer-clock.component.html',
  styleUrls: ['./timer-clock.component.scss']
})
export class TimerClockComponent implements OnInit {

  private hours = 0;
  private minutes = 0;
  private seconds = 0;

  constructor(private timerService: PomodoroTimerService) { }

  ngOnInit() {
    this.timerService.timeLeft.subscribe((timeLeft: number) => {
      this.seconds = Math.floor(timeLeft / 1000) % 60;
      this.minutes = Math.floor(timeLeft / 1000 / 60) % 60;
    });
  }

  startTimer() {
    this.timerService.startTimer(.1 * 60 * 1000);
  }

  getFormatedTime() {
    return `${('' + this.minutes).padStart(2, '0')}:${('' + this.seconds).padStart(2, '0')}`;
  }

}
