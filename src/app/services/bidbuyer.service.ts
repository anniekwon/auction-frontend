import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Buyer } from '../Buyer';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'appplication/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class BidbuyerService {
  
  private apiUrl = "http://localhost:3000/e-auction/api/v1/seller/show-buyers/6397a6d761f53c3972d5a9d7";
  
  constructor(private http:HttpClient) { }

  getBidBuyers(): Observable<Buyer[]> {
    return this.http.get<Buyer[]>(this.apiUrl)
  }
}
