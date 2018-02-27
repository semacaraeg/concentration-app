import { Component, OnInit } from '@angular/core';
import { GameService } from '../game/game.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179.9deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])  
  ]
})
export class BoardComponent implements OnInit {

  constructor(private _cards: GameService) { 
   
  }

  ngOnInit() {
   this._cards.newGame();
  }
  
  toggleFlip(card: any, i:number) {
    this._cards.deckCards[i].flip = (this._cards.deckCards[i].flip == 'inactive') ? 'active' : 'inactive';
    this._cards.flipCard(card , i);
  }
  
}
