import { Component } from '@angular/core';
//import { Http, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Concentration';
  private apiUrl = 'https://deckofcardsapi.com/api/';
  
  getNewDeck(){
    return this.apiUrl + "deck/new/shuffle/deck_count=1";
    //return this.http.get(this.apiUrl + "deck/new/shuffle/deck_count=1");
  }
  
  newGame(){
    alert(this.getNewDeck());
  }
  
}
