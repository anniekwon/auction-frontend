import { Component, OnInit } from '@angular/core';
import { BidService } from 'src/app/services/bid.service';
import { Bid } from 'src/app/Bid';
import { Buyer } from 'src/app/Buyer';
import { Product } from 'src/app/Product'
import { BidproductService } from 'src/app/services/bidproduct.service';
import { BidProductComponent } from '../bid-product/bid-product.component';

@Component({
  selector: 'app-bids',
  templateUrl: './bids.component.html',
  styleUrls: ['./bids.component.css']
})

export class BidsComponent implements OnInit {
  bids: Bid[] = [];
  products: Product[] =[];

  constructor(private bidService: BidService, private bidProductService: BidproductService) {

  }

  ngOnInit(): void {
      this.bidService.getBids().subscribe((data) => this.bids = data);
      this.bidProductService.getBidProduct().subscribe((data) => this.products = data );
  }

}
