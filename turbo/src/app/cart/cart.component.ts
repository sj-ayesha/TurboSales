import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetails, CarService } from '../_services/car.service';
import { CartService } from '../_services/cart.service';
import { Item } from '../_entities/item.entity';
import { BuyCarService } from '../_services/buy-car.service';
import {Observable} from 'rxjs';
import {of} from 'rxjs/observable/of';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

	public shoppingCartItems$: Observable<CarDetails[]> = of([]);
	public shoppingCartItems: CarDetails[] = [];
	constructor(private cartService: CartService, private route: ActivatedRoute) {
		this.shoppingCartItems$ = this.cartService.getItems();

		this.shoppingCartItems$.subscribe(_ => this.shoppingCartItems = _);

	}

	ngOnInit() {
		const id = parseInt(this.route.snapshot.paramMap.get('id'));

		
	}

	public removeItem(item: CarDetails) {
		this.cartService.removeFromCart(item)
	}

	// private items: Item[] = [];
	// private total: number = 0;
	// private totalQuantity: number = 0;

	// constructor(private activatedRoute: ActivatedRoute, private buyCarService: BuyCarService, private carService: CarService) { }

	// ngOnInit() {
	// 	let id = this.carService.getUrl();
	// 	this.loadCart();
	// }

	// loadCart(): void {
	// 	this.total = 0;
	// 	this.items = [];
	// 	this.totalQuantity = 0;
	// 	let cart = JSON.parse(localStorage.getItem('cart'));
	// 	for (var i = 0; i < cart.length; i++) {
	// 		let item = JSON.parse(cart[i]);
	// 		this.items.push({
	// 			product: item.product,
	// 			quantity: item.quantity
	// 		});
	// 		this.total += item.product.price * item.quantity;
	// 		this.totalQuantity += 0 + item.quantity;
	// 	}
	// 	localStorage.setItem('quantity', JSON.stringify(this.totalQuantity));
	// }

	// remove(id: number): void {
	// 	let cart: any = JSON.parse(localStorage.getItem('cart'));
	// 	let index: number = -1;
	// 	for (var i = 0; i < cart.length; i++) {
	// 		let item: Item = JSON.parse(cart[i]);
	// 		if (item.product.id == id) {
	// 			cart.splice(i, 1);
	// 			break;
	// 		}
	// 	}
	// 	localStorage.setItem("cart", JSON.stringify(cart));
	// 	this.loadCart();
	// 	window.location.reload();
	// }
}
