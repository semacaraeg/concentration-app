import { Component, OnInit } from '@angular/core';
import { CardService } from '../card/card.service';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  cardDeckId : string;
  memory_cards = [];
  user_pick_counter = 0;
  user_cards = [];
  constructor(private _cards: CardService) { }

  ngOnInit() {
    this._cards.getCards()
    //this.newGame()
  }

  newGame(){
    this.reset();
    console.log(this._cards.cardDeck.cards.length);
    for (let item of this._cards.cardDeck.cards) {
    this.memory_cards.push({id:item.code, value: item.value, img:item.image, isFlipped: false, isMatched: false});
    }
    console.log(this.memory_cards)
   }
   
  selectCard(card: any, card_index: number){
    if(this.user_pick_counter < 2){
      this.memory_cards[card_index].isFlipped = true;
      this.user_pick_counter++;
      this.user_cards.push(card);
      console.log("User selected : "+ card, card_index)
    }
    if(this.user_pick_counter == 2){
      this.compareCard(this.user_cards[0], this.user_cards[1])
    }
  }
   compareCard(card_one : any, card_two:any){
     if(card_one == card_two){
       //this.memory_cards.splice();      
       // this.cardsMatched(card_one, card_two);
     }
     console.log(this.memory_cards);
   }
   
   
   
   reset(){
     this._cards.getCards()
     this.memory_cards = [];
     this.user_pick_counter = 0;
     this.user_cards = [];
   }
}
