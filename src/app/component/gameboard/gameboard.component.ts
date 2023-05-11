import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css']
})
export class GameboardComponent {
  private gameSize = { row: 3, column: 3 } ;

  get GameSizeRow() {
    return Array(this.gameSize.row);
  }

  get GameSizeColumn() {
    return Array(this.gameSize.column);
  }
}
