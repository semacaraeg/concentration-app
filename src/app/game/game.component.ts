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
  deck = 52; 
  
  constructor(private _cards: CardService) { }

  ngOnInit() {
    this._cards.getCards()
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
    if(this.user_pick_counter <= 2 && this.memory_cards[card_index].isFlipped == false){
      this.memory_cards[card_index].isFlipped = true
      this.user_pick_counter++
      this.user_cards.push({cardValue: card.value, card_memory_index : card_index})
      console.log("User selected : "+ card, card_index)
    }
    if(this.user_pick_counter == 2){
      this.compareCard(this.user_cards[0], this.user_cards[1])
    }
  }
  
  
   compareCard(card_one : any, card_two: any){
     console.log(card_one.value, card_two.value)
     if(card_one.cardValue == card_two.cardValue){
       console.log("CARDS MATCHED")
       setTimeout(()=>{
        this.memory_cards[card_one.card_memory_index].isMatched = true
        this.memory_cards[card_two.card_memory_index].isMatched = true
       },1000)
  
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
          this.memory_cards[card_one.card_memory_index].isFlipped = false;
          this.memory_cards[card_two.card_memory_index].isFlipped = false;
         }, 1000)
       console.log("CARDS DO NOT MATCH!!!!")
     }
     this.user_pick_counter = 0
     this.user_cards = []
     console.log(this.deck)
     //console.log(this.memory_cards);
   }
   
   reset(){
     this._cards.getCards()
     this.memory_cards = [];
     this.user_pick_counter = 0;
     this.user_cards = [];
   }
}
