import { Component, OnInit } from '@angular/core';
import { GameService } from '../game/game.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  constructor(private _cards: GameService) { }

  ngOnInit() {
  }
  
}
