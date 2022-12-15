import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Product';
import { Bid } from '../Bid';
import { Buyer } from '../Buyer'

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

  private productUrl = "http://localhost:3000/e-auction/api/v1/seller/show-product/6397a6d761f53c3972d5a9d7";

  private buyerUrl = "http://localhost:3000/e-auction/api/v1/seller/show-buyers/6397a6d761f53c3972d5a9d7";
  
  constructor(private http:HttpClient) { }

  getBids():Observable<Bid[]> {
    return this.http.get<Bid[]>(this.apiUrl)
  }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.productUrl)
  }

  getBuyers(): Observable<Buyer[]>{
    return this.http.get<Buyer[]>(this.buyerUrl)
  }
}
