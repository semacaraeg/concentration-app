import { Component, OnInit, Input} from '@angular/core';
import { CardService } from '../card/card.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit {
  
  deckCards :any[] = [];
  flipCounter : number = 0;
  flippedCards : any[] = [];
  deck : number = 52; 
  buttonLabel : string = "Start a New Game";
  
  constructor(private _cards: CardService) { }

  ngOnInit() {
    this._cards.getCards()
  }

  newGame(){
    this.buttonLabel = "RESET GAME"
    this.reset();
   
    for (let item of this._cards.cardDeck.cards) {
        this.deckCards.push({id:item.code, value: item.value, img:item.image, isFlipped: false, isMatched: false});
    }
    //console.log(this.selectedCards)
   }
   
  selectCard(card: any, card_index: number){
      
    if(this.flipCounter <= 2 && this.deckCards[card_index].isFlipped == false){
      this.deckCards[card_index].isFlipped = true
      this.flipCounter++
      this.flippedCards.push({cardValue: card.value, card_memory_index : card_index})
      console.log("User selected : "+ card, card_index)
    }
    if(this.flipCounter == 2){
      this.compareCard(this.flippedCards[0], this.flippedCards[1])
    }
  }
  
   compareCard(card_one : any, card_two: any){
     console.log(card_one.value, card_two.value)
     if(card_one.cardValue == card_two.cardValue){
       console.log("CARDS MATCHED")
       setTimeout(()=>{
        this.deckCards[card_one.card_memory_index].isMatched = true
        this.deckCards[card_two.card_memory_index].isMatched = true
       },700)
  
       this.deck -=2
       
       /*setTimeout(()=>{
          this.memory_cards.splice(card_one.card_memory_index,1);
          this.memory_cards.splice(card_two.card_memory_index,1);
       },1000)
       */
       //this.memory_cards.splice(card_one.card_memory_index,1);
       //this.memory_cards.splice(card_two.card_memory_index,1);
       // this.cardsMatched(card_one, card_two);
     }else{
       setTimeout(()=>{
          this.deckCards[card_one.card_memory_index].isFlipped = false;
          this.deckCards[card_two.card_memory_index].isFlipped = false;
         }, 700)
       console.log("CARDS DO NOT MATCH!!!!")
     }
     this.flipCounter = 0
     this.flippedCards = []
     console.log(this.deck)
     //console.log(this.memory_cards);
   }
   
   reset(){
     this._cards.getCards()
     this.deckCards = [];
     this.flipCounter = 0;
     this.flippedCards = [];
   }
}
