import { Component, OnInit } from '@angular/core';
import { GameService } from '../game/game.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  gameStarted = false;
  
  constructor(private _cards: GameService) { }

  ngOnInit() {
  }
  
  newGame(){
    this._cards.newGame();
    this.gameStarted = true;
  }
}
