import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css']
})
export class GameboardComponent implements OnInit {
  square: string[];
  currentPlayer: string;
  isPlayerXNext: boolean;

  get GameSquare() {
    return this.square;
  }

  ngOnInit() {
    this.square = Array(9).fill(null);
    this.currentPlayer = 'X';
    this.isPlayerXNext = false;
  }

  setCurrentPlayer() {
    this.currentPlayer = this.isPlayerXNext == true ? 'X' : 'O';
  }

  addShape(squareChosen: number) {
    this.square[squareChosen] = this.currentPlayer;
    this.isPlayerXNext = this.currentPlayer == 'X' ? false : true;
    this.setCurrentPlayer();
  }
}
