import { Component, OnInit } from '@angular/core';
import { BidService } from 'src/app/services/bid.service';
import { Bid } from 'src/app/Bid';

@Component({
  selector: 'app-bids',
  templateUrl: './bids.component.html',
  styleUrls: ['./bids.component.css']
})

export class BidsComponent implements OnInit {
  bids: Bid[] = [];

  constructor(private bidService: BidService) {

  }

  ngOnInit(): void {
      this.bidService.getBids().subscribe((data) => this.bids = data)
      console.log(this.bids)
  }

}
