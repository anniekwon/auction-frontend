import { Component, OnInit, Input} from '@angular/core';
import { Bid } from 'src/app/Bid'

@Component({
  selector: 'app-bid-item',
  templateUrl: './bid-item.component.html',
  styleUrls: ['./bid-item.component.css']
})

export class BidItemComponent implements OnInit{
  @Input() bid!: Bid;

  constructor() {}

  ngOnInit(): void {
      
  }
}
