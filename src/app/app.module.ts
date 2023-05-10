import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CheckComponent } from './component/check/check.component';
import { CrossComponent } from './component/cross/cross.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GameboardComponent } from './component/gameboard/gameboard.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckComponent,
    CrossComponent,
    GameboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
