import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit{

  constructor(){};
  board!:Array<string>

  ngOnInit(): void{
    this.board=new Array(9).fill("")
  };

  handlePlayer(index:number){
    this.board[index]=index+"";
  }
}
