import { Component, OnInit, Input} from '@angular/core';
//import { CardService } from '../card/card.service';
import { GameService } from '../game/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit {
  
  constructor(private _cards: GameService) { 
  }
  
  ngOnInit() {
  }
}