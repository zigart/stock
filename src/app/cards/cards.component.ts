import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { card } from './card.model';
import { cardService } from './card.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  public cardInfo:card[] = [];

  constructor(public cardService:cardService) {
  }
  
  ngOnInit(): void {
    this.cardInfo = this.cardService.cards;
  }


  addCounter(counter:number, element:any){
    let add = counter;
    add += 1;
    this.cardService.updateCounter(add, element)

  }

  substractCounter(counter:number, element:any){
    let substract = counter;
    substract -= 1;
    this.cardService.updateCounter(substract, element);
  }
}

//this.cardService.deleteCard(evento);