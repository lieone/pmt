import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilesComponent } from './component/files/files.component';
import { TextInputComponent } from './component/input/text-input/text-input.component';
import { TimerClockComponent } from './component/timer-clock/timer-clock.component';
import { StatusBarComponent } from './component/status-bar/status-bar.component';
import { WindowButtonsComponent } from './component/status-bar/window-buttons/window-buttons.component';
import { TitleBarComponent } from './component/status-bar/title-bar/title-bar.component';
import { MenuBarComponent } from './component/status-bar/menu-bar/menu-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    FilesComponent,
    TextInputComponent,
    TimerClockComponent,
    StatusBarComponent,
    WindowButtonsComponent,
    TitleBarComponent,
    MenuBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
