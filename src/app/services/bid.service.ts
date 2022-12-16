import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bid } from '../Bid';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'appplication/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class BidService {

  private apiUrl = "http://localhost:3000/e-auction/api/v1/seller/show-bids/6397a6d761f53c3972d5a9d7";
  
  constructor(private http:HttpClient) { }

  getBids():Observable<Bid[]> {
    return this.http.get<Bid[]>(this.apiUrl)
  }

}
