import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import  { filter, map, reduce,  } from 'rxjs/operators'
import { pipe } from 'rxjs/Rx';
@Injectable()
export class CardService {
  
  constructor(private http: HttpClient) { }

  apiUrl = 'https://deckofcardsapi.com/api/deck/new/draw/?count=52';
  
   apiGetCards(){
     return this.http.get(this.apiUrl)
       .pipe(
      //this is using the map operator for rxjs observables, line 4 above.
          map( (res: any) => {
            console.log("before formating data", res.cards)
              /*Inside here we can access the array and use the normal array.map 
            to format our data into the proper array shape
             */
            return res.cards.map( card => {
              return  {
                  id:card.code, 
                  value: card.value, 
                  img:card.image, 
                  isFlipped: false, 
                  isMatched: false, 
                  flip: "inactive"}
              })
          })
    )
  }
}
