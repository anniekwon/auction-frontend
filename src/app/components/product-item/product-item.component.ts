import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Product } from 'src/app/Product';
import { faTimes } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;
  @Output() onDeleteProduct: EventEmitter<Product> = new EventEmitter();
  @Output() onToggleBid: EventEmitter<Product> = new EventEmitter();
  @Output() onSelectProduct: EventEmitter<Product> = new EventEmitter();
  faTimes = faTimes;
  
  constructor() {

  }

  ngOnInit(): void {
        
  }

  onDelete(product: Product) {
    this.onDeleteProduct.emit(product);
  }

  onToggle(product: Product) {
    this.onToggleBid.emit(product)
  }

  onSelect(product: Product) {
    this.onSelectProduct.emit(product)
  }
}
