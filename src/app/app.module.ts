import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { CardsComponent } from './cards/cards.component';
import { CardsContainerComponent } from './cards-container/cards-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { connectionBackend } from './services/connection.service'
import { Router } from '@angular/router';


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
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [connectionBackend, Router],
  bootstrap: [AppComponent]
})
export class AppModule { }
