import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Product } from 'src/app/Product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{
  @Output() onAddProduct: EventEmitter<Product> = new EventEmitter();

  name!: string;
  description!: string;
  price!: number;
  category!: string;
  endDate!: string;
  bid: boolean = false;
  image!: string;
  showAddProduct: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddProduct = value));
  }

  ngOnInit(): void {
      
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

  onSubmit() {
    if(!this.name) {
      alert('Please add a name!');
      return;
    }

    const newProduct: Product = {
      name: this.name,
      description: this.description,
      category: this.category,
      image: this.image,
      price: this.price,
      endDate: this.endDate,
      bid: false
    }
    console.log(newProduct)
    this.onAddProduct.emit(newProduct);

    this.name = ""
    this.description = ""
    this.category = ""
    this.image = ""
    this.price = 0
    this.endDate = ""
    this.bid = false

  }


}
