import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameControlComponent } from './game-control/game-control.component';
import { EvenCComponent } from './game-control/even-c/even-c.component';
import { OddCComponent } from './game-control/odd-c/odd-c.component';
import { FormsModule } from '@angular/forms';
import { AnsComponent } from './ans/ans.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    EvenCComponent,
    OddCComponent,
    AnsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
