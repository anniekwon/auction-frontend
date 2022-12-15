import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  
  constructor(private productService: ProductService) {
  
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => this.products = products);
  }

  deleteProduct(product: Product) {
    this.productService.deleteProduct(product).subscribe(() => this.products = this.products.filter( p => p.id !== product.id));
  }

  toggleBid(product: Product) {
    product.bid = !product.bid;
    this.productService.updateProductBid(product).subscribe();
  }

  addProduct(product: Product){
    this.productService.addProduct(product).subscribe((product) => this.products.push(product) );
  }
}
