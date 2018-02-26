import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { CardService } from './card/card.service';
import { GameService } from './game/game.service';
import { BoardComponent } from './board/board.component';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [CardService, GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
