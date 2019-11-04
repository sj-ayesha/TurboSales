import { Component, OnInit } from '@angular/core';
import { Item } from '../../_entities/item.entity';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  private items: Item[] = [];
	private total: number = 0;
	private totalQuantity: number = 0;

  constructor() { }

  ngOnInit() {
    this.loadCart();
  }

  loadCart(): void {
		this.total = 0;
		this.items = [];
		this.totalQuantity = 0;
		let cart = JSON.parse(localStorage.getItem('cart'));
		// console.log(cart.length)
		for (var i = 0; i < cart.length; i++) {
			let item = JSON.parse(cart[i]);
			this.items.push({
				product: item.product,
				quantity: item.quantity
			});
			this.total += item.product.price * item.quantity;
			this.totalQuantity += 0 + item.quantity;
		}
		localStorage.setItem('quantity', JSON.stringify(this.totalQuantity));
	}
}
