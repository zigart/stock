import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { card } from '../cards/card.model';
import { CardsComponent } from '../cards/cards.component';
import { connectionBackend } from '../services/connection.service';


@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.scss']
})

export class CardsContainerComponent implements OnInit, AfterViewInit {
  title = "STOCK"
  @ViewChild('cards') cards!:CardsComponent;
  
  public card:card;

  constructor(public connectionBackend:connectionBackend) { 
    this.card = new card('', '', '', 0);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    
  }
  

  addCard(f:NgForm){
    console.log(this.card);
    this.connectionBackend.addCard(this.card).subscribe(
      response =>{
        console.log(response);
        f.reset();
      }, error =>{
        console.log(error);
      }
    );
    this.cards.getCards();
  }

  

}
