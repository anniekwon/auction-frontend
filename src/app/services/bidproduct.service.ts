import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Product';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'appplication/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class BidproductService {

  private apiUrl = "http://localhost:3000/e-auction/api/v1/seller/show-product/6397a6d761f53c3972d5a9d7";
  
  constructor(private http:HttpClient) { }

  getBidProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl)
  }
}
