import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/Product';

@Component({
  selector: 'app-bid-product',
  templateUrl: './bid-product.component.html',
  styleUrls: ['./bid-product.component.css']
})
export class BidProductComponent implements OnInit{
  @Input() product!: Product;
  nowDate: number;
  endBid: number;
  diffDays: number;

  constructor() { }

  ngOnInit(): void {
      this.nowDate = new Date().getTime();
      this.endBid = new Date(this.product.endDate).getTime()

      this.diffDays = Math.round((this.endBid - this.nowDate)/(1000 * 3600 * 24))
  }
}
