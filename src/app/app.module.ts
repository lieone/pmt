import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilesComponent } from './component/files/files.component';
import { TextInputComponent } from './component/input/text-input/text-input.component';
import { TimerClockComponent } from './component/timer-clock/timer-clock.component';

@NgModule({
  declarations: [
    AppComponent,
    FilesComponent,
    TextInputComponent,
    TimerClockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
