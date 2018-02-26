import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Card } from './card';

@Injectable()
export class CardService {
  
  cardDeck: any ;
  
  
  constructor(private http: HttpClient) { 
  }

  apiUrl = 'https://deckofcardsapi.com/api/deck/new/draw/?count=52';
  
 
  newData() {
    return this.http.get(this.apiUrl);
  }
  
   getCards() {
     this.http.get(this.apiUrl)
       .subscribe(res => {
          // console.log(res.cards) 
           this.cardDeck = res 
           console.log("CARD SERVICE"+this.cardDeck)
       })
   }
}
