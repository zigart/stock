import { Component, OnInit } from '@angular/core';
import { card } from '../cards/card.model';
import { cardService } from '../cards/card.service';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.scss']
})
export class CardsContainerComponent implements OnInit {
  title = "STOCK"
  
  public card:card[] = [];
  public titleInput:string = '';
  public descriptionInput:string = '';
  public counterInput:number = 0;
  constructor(public cardService:cardService) { 
  }
  
  ngOnInit(): void {
    this.card = this.cardService.cards;
  }
  
  addCard(){
    this.card.push(new card('', this.titleInput, this.descriptionInput, this.counterInput));
    this.titleInput = '';
    this.descriptionInput = '';
    this.counterInput = 0;
  }

}
