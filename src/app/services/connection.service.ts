import { HttpClient, HttpHeaders } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { card } from '../cards/card.model';

@Injectable()
export class connectionBackend{
  public url: string = 'http://localhost:3700/';
  constructor(private _http: HttpClient) {}
  
  addCard(card: card): Observable<any> {
    let headers = new HttpHeaders();
    return this._http.post(this.url + 'cards/add', card, {headers: headers});
  }

  getCards():Observable<any>{
		let headers = new HttpHeaders().set('Content-type', 'application/json');
		return this._http.get(this.url + 'cards', {headers: headers});
	}

  deleteCard(id:string):Observable<any>{
		let headers = new HttpHeaders().set('Content-type', 'application/json');
		return this._http.delete(this.url + 'cards/' + id, {headers: headers});
	}

  updateCard(card:any): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');
		return this._http.put(this.url+'cards/'+card._id, card, {headers: headers});
	}
}
