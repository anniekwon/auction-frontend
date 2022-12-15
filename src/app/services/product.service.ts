import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
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

export class ProductService {
  private apiUrl = "http://localhost:3000/e-auction/api/v1/seller/";

  constructor(private http:HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl)
  }

  getProductBid(id: number): Observable<Product> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Product>(url);
  }
  deleteProduct(product: Product): Observable<Product> {
    const url = `${this.apiUrl}/${product.id}`;
    return this.http.delete<Product>(url);
  }
  
  updateProductBid(product: Product): Observable<Product> {
    const url = `${this.apiUrl}/${product.id}`;
    return this.http.patch<Product>(url, product, httpOptions)
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product, httpOptions)
  }
}
