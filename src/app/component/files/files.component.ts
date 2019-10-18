import { Component, OnInit, Inject } from '@angular/core';
import { PomodoroTimerService } from '@app/service/pomodoro-timer.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {

  constructor(private pomodoroTimerService: PomodoroTimerService) { }

  async ngOnInit() {
  }

}
