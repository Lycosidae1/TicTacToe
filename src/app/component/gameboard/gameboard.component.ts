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
  gameSize = 3;

  get GameSquare() {
    return this.square;
  }

  ngOnInit() {
    this.square = Array(9).fill(null);
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
      if(this.hasAWinner()) {
        console.log('Sheeesh');
        this.currentPlayer = 'WINNER!!!!!';
        return;
      }
      this.isPlayerXNext = this.currentPlayer == 'X' ? false : true;
      this.setCurrentPlayer();
    }
  }

  hasAWinner(): boolean {
    return this.checkRows() || this.checkColumns() || this.checkDiagonal1() || this.checkDiagonal2();
  }

  checkRows(): boolean {
    for(let i = 0; i <= this.gameSize; i++) {
      for(let j = 0; j <= this.gameSize; j++) {
        if(this.square[(i*this.gameSize)+j] !== this.currentPlayer) {
          break;
        }
        if(j === this.gameSize-1) {
          return true;
        }
      }

    }
    return false;
  }

  checkColumns(): boolean {
    for(let i = 0; i <= this.gameSize; i++) {
      for(let j = 0; j <= this.gameSize; j++) {
        if(this.square[(j*this.gameSize)+i] !== this.currentPlayer) {
          break;
        }
        if(j === this.gameSize-1) {
          return true;
        }
      }

    }
    return false;
  }

  checkDiagonal1(): boolean {
    for(let i = 0; i < this.gameSize; i++) {
      
      if(this.square[(this.gameSize + 1) * i] !== this.currentPlayer) {
        return false;
      }
    }
    return true;
  }

  checkDiagonal2(): boolean {
    for(let i = 1; i <= this.gameSize; i++) {
      console.log((this.gameSize - 1) * i);
      if(this.square[(this.gameSize - 1) * i] !== this.currentPlayer) {
        return false;
      }
    }
    return true;
  }

}



