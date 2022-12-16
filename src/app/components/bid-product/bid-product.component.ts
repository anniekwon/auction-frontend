import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/Product';

@Component({
  selector: 'app-bid-product',
  templateUrl: './bid-product.component.html',
  styleUrls: ['./bid-product.component.css']
})
export class BidProductComponent implements OnInit{
  @Input() product!: Product;

  constructor() { }

  ngOnInit(): void {
      
  }
}
