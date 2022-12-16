import { Component, Input, OnInit } from '@angular/core';
import { Buyer } from 'src/app/Buyer';


@Component({
  selector: 'app-bid-buyer',
  templateUrl: './bid-buyer.component.html',
  styleUrls: ['./bid-buyer.component.css']
})
export class BidBuyerComponent implements OnInit{
  @Input() buyer!: Buyer;

  constructor() {

  }

  ngOnInit(): void {
     
  }
}
