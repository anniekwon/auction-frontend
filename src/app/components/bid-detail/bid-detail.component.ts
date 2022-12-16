import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Product';
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'
import { ProductService } from 'src/app/services/product.service';
import { Bid } from 'src/app/Bid';
import { BidService } from 'src/app/services/bid.service';


@Component({
  selector: 'app-bid-detail',
  templateUrl: './bid-detail.component.html',
  styleUrls: ['./bid-detail.component.css']
})
export class BidDetailComponent implements OnInit{
  bids: Bid[] = [];
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private bidService: BidService,
    private location: Location
  ) { }

  ngOnInit(): void {
      this.getProduct();
      this.bidService.getBids().subscribe((data) => this.bids = data);
  }

  getProduct(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id).subscribe(product => this.product = product)
  }

}
