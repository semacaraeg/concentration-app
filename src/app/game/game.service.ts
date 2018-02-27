import { Injectable } from '@angular/core';
import { CardService } from '../card/card.service';


@Injectable()
export class GameService {
 
  deckCards :any[];
  flipCounter : number;
  flippedCards : any[];
  cardsMatched : number; 
  isGameOver : boolean;
  gameStarted : boolean;
  
  constructor(private _cards : CardService) { }
  
  getCards(){
      this._cards.getCards();
  }
  
  newGame(){
      
    //initialize values
     this.isGameOver = false;
     this.deckCards = [];
     this.flipCounter = 0;
     this.flippedCards = [];
     this.cardsMatched = 0;
     
     this.getCards();
     
    for (let item of this._cards.cardDeck.cards) {
        this.deckCards.push({id:item.code, value: item.value, img:item.image, isFlipped: false, isMatched: false, flip: "inactive"});
    }
    console.log(this.deckCards);
   }
   
  flipCard(card: any, card_index: number){
    
    if(this.flipCounter <= 2 && this.deckCards[card_index].isFlipped == false){
      this.deckCards[card_index].isFlipped = true;
      this.flipCounter++;
      this.flippedCards.push({cardValue: card.value, card_memory_index : card_index});
      
      console.log("User selected : "+ card, card_index);
    }
    
    if(this.flipCounter === 2){
      this.compareCard(this.flippedCards[0], this.flippedCards[1]);
    }
    
    if(this.cardsMatched === this.deckCards.length){
        setTimeout(()=> this.isGameOver = true , 700);
    }
    
  }
  
   compareCard(card_one : any, card_two: any){
     
     //console.log(card_one.value, card_two.value);
     
     if(card_one.cardValue == card_two.cardValue){
       console.log("CARDS MATCHED");
       setTimeout(()=>{
        this.deckCards[card_one.card_memory_index].isMatched = true;
        this.deckCards[card_two.card_memory_index].isMatched = true;
       },1000)
  
       this.cardsMatched +=2;
      
     }else{
       setTimeout(()=>{
          this.deckCards[card_one.card_memory_index].isFlipped = false;
          this.deckCards[card_two.card_memory_index].isFlipped = false;
          this.deckCards[card_one.card_memory_index].flip = "inactive";
          this.deckCards[card_two.card_memory_index].flip = "inactive";
         }, 700)
       //console.log("CARDS DO NOT MATCH!!!!")
     }
     
     this.flipCounter = 0;
     this.flippedCards = [];
     console.log("Number of cards matched: " + this.cardsMatched);
   }
   
   reset(){
     this.getCards();
     this.deckCards = [];
     this.flipCounter = 0;
     this.flippedCards = [];
     this.cardsMatched = 0;
   }
   
   quit(){
       this.deckCards = [];
       this.isGameOver = true;
   }
  
}
