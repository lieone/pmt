import { Injectable } from '@angular/core';
import { remote } from 'electron';
import { not } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class FocusOnEndService {

  constructor() { }

  pomodoroEnd() {
    const notif = new Notification('Timer end', { body: 'Pomodoro finished' });
    notif.onclick = e => remote.getCurrentWindow().focus();
    console.log('timer end');
  }
}
