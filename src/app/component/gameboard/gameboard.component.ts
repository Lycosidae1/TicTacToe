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
  winner: boolean;
  row: string[3][3];
  column: string[3][3];

  get GameSquare() {
    return this.square;
  }

  ngOnInit() {
    this.square = Array(9).fill(null);
    // this.row = Array(3).fill(null);
    // this.column = Array(3).fill(null);
    this.currentPlayer = 'X';
    this.isPlayerXNext = false;
    this.winner = false;
  }

  setCurrentPlayer() {
    this.currentPlayer = this.isPlayerXNext == true ? 'X' : 'O';
  }

  addShape(squareChosen: number) {
    if (this.square[squareChosen] == null) {
      this.square[squareChosen] = this.currentPlayer;
      this.isPlayerXNext = this.currentPlayer == 'X' ? false : true;
      this.setCurrentPlayer();
    }  
  }

  checkWinner() {
    this.winner  = this.checkRow();
  }

  checkRow(): boolean {
    let verify: number = 0;
    let currentValue: string = '';
    for(let i: number = 0; i <= this.row.length; i++) {
      for(let j: number = 0; j <= this.row[i].length; j++) {
        if (this.row[i][j] != null) {
          currentValue = this.square[i];
          verify++;
          if (verify == 3) return true;
        }
      }
      verify = 0;
    }
    return false;
  }

  checkColumn(): boolean {
    return false;
  }
}
