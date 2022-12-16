import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bid } from '../Bid';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'appplication/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class BidService {

  //private apiUrl = "http://localhost:3000/e-auction/api/v1/seller/show-bids/6397a6d761f53c3972d5a9d7";

  
  constructor(private http:HttpClient, private location: Location) { }

  // getBids():Observable<Bid[]> {
  //   return this.http.get<Bid[]>(this.apiUrl)
  // }
   getBids():Observable<Bid[]> {
    const id = this.location.path().substring(11)
    const testUrl = `http://localhost:3000/e-auction/api/v1/seller/detail-bid/${id}`;
     return this.http.get<Bid[]>(testUrl)
  }

}
