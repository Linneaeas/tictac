import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit{

  constructor(){};
  board!:Array<string>
  player_turn="X";
  winning_border=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8],
  ]
  ngOnInit(): void{
    this.board=new Array(9).fill("")
  };

  handlePlayer(index:number){
    this.board[index]=this.player_turn
    this.player_turn=(this.player_turn=="X")? "O":"X";
  }
}
