import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Injector, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { card } from '../cards/card.model';
import { cardService } from '../cards/card.service'

@Injectable()
export class connectionBackend{
  public url: string = 'http://localhost:3700/';
  constructor(private _http: HttpClient) {}
  
  addCard(card: card): Observable<any> {
    console.log(card);
    let headers = new HttpHeaders();
    return this._http.post(this.url + 'cards/add', card, {headers: headers});
  }

  getCards():Observable<any>{
		let headers = new HttpHeaders().set('Content-type', 'application/json');
		return this._http.get(this.url + 'cards', {headers: headers});
	}
}
