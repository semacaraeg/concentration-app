import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { GameComponent } from './game/game.component';
import { CardService } from './card/card.service';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
