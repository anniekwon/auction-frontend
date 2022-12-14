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

  selectProduct(id: any): Observable<Product> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Product>(url);
  }
  deleteProduct(product: Product): Observable<Product> {
    const url = `${this.apiUrl}/delete/${product._id}`;
    return this.http.delete<Product>(url);
  }
  
  updateProductBid(product: Product): Observable<Product> {
    const url = `${this.apiUrl}/${product._id}`;
    return this.http.patch<Product>(url, product, httpOptions)
  }

  addProduct(product: Product): Observable<Product> {
    const url = `${this.apiUrl}/add-product`;
    return this.http.post<Product>(url, product, httpOptions)
  }

  getProduct(id:any): Observable<Product> {
    const url = `${this.apiUrl}/detail/${id}`;
    console.log(url)
    return this.http.get<Product>(url);
  }

}
