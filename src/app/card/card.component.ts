import { Component, OnInit } from '@angular/core';
import { Card }  from './card';
import { CardService } from './card.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private cardService : CardService) {
    
  }
  
  ngOnInit() {
    this.cardService.getCards();
  }
  
 
}
