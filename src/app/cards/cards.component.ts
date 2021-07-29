import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { connectionBackend } from '../services/connection.service';
import { card } from './card.model';
import { cardService } from './card.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  public card:card[] = [];

  constructor(private cardService:cardService, private connectionBackend:connectionBackend) {}
  
  ngOnInit(): void {
    this.getCards();
  }

  getCards(){
    this.connectionBackend.getCards().subscribe(
      response =>{
        this.card = response.card;
        console.log(this.card)
      }, error =>{
        console.log(error);
      }
    )
  }

  //ingresoar al array del id especificado y acceder al counter de ese elemento

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

  deleteCard(event:Event){
    this.cardService.deleteCard(event);
  }
}