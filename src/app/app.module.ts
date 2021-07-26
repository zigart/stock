import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { CardsComponent } from './cards/cards.component';
import { CardsContainerComponent } from './cards-container/cards-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { cardService } from './cards/card.service';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CardsComponent,
    CardsContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [cardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
