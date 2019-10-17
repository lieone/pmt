import { TestBed } from '@angular/core/testing';

import { PomodoroTimerService } from './pomodoro-timer.service';

describe('PomodoroTimerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PomodoroTimerService = TestBed.get(PomodoroTimerService);
    expect(service).toBeTruthy();
  });
});
