import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { connectionBackend } from '../services/connection.service';
import { card } from './card.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  public card: card[] = [];

  constructor(private _connectionBackend: connectionBackend) {}

  ngOnInit(): void {
    this.getCards();
  }

  getCards() {
    this._connectionBackend.getCards().subscribe(
      (response) => {
        this.card = response.card;
        this.card;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteCard(id: string) {
    this._connectionBackend.deleteCard(id).subscribe(
      (response) => {
        if (response.card) {
          this.getCards();
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  //ingresoar al array del id especificado y acceder al counter de ese elemento

  addCounter(card: card) {
    console.log(card);
    card.counter = card.counter + 1;
    console.log(card);
    this.updateCounter(card);
  }

  substractCounter(card:card){ 
    card.counter = card.counter - 1;
    this.updateCounter(card);
   }

  //problemas con el cors, no deja llevarse esto por lo que entiendo
  //revisar

  updateCounter(card:card) {
    this._connectionBackend.updateCard(card).subscribe(
      (response) => {
        console.log(card.counter);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // substractCounter(counter:number, element:any){
  //   let substract = counter;
  //   substract -= 1;
  //   this.cardService.updateCounter(substract, element);
  // }

  // deleteCard(event:Event){
  //   this.cardService.deleteCard(event);
  // }
}
