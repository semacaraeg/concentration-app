import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CardService {
  
  cardDeck: any ;
  //cardDeckId : string;
  
  constructor(private http: HttpClient) { 
  }

  apiUrl = 'https://deckofcardsapi.com/api/deck/new/draw/?count=52';
  //apiUrl = 'https://deckofcardsapi.com/api/deck/new/';
  
  getCards() {
     this.http.get(this.apiUrl)
       .subscribe(res => this.cardDeck = res);
       //this.cardDeckId = this.cardDeck.deck_id;
       //console.log("deck-id: " + this.cardDeckId);
   }
}
