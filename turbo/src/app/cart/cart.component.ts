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
	private items: Item[] = [];
	private total: number = 0;
	private totalQuantity: number = 0;
	
	public newArr = [];

	constructor(private cartService: CartService, private route: ActivatedRoute) {
		this.shoppingCartItems$ = this.cartService.getItems();

		this.shoppingCartItems$.subscribe(_ => this.shoppingCartItems = _);

		localStorage.setItem('shoppingCart', JSON.stringify(this.shoppingCartItems));

		
		
		let arr = this.shoppingCartItems;

		
		let lookupObject = {};
		let i;

		for(i in arr) {
			
			lookupObject[arr[i]["id"]] = arr[i];
		}

		
		for( i in lookupObject) {
			this.newArr.push(lookupObject[i]);
		}

		let quantity = 0;
		let sizeOfNewArray = 0;

		//loop in array of objects
			// newArr id
			//loop in arr and compare id
		//increment quantity
		//at the end of array, push new quantity in object and set quantity back to zero
		//compare second id

		this.newArr.forEach(element => {
			element.quantity = 0;
			arr.forEach(el => {

				if (element.id === el.id) {
					quantity += 1;
				}

				//newArr[i].quantity = quantity;
			})
			//newArr[i].quantity = quantity;
			element.quantity = quantity;
			quantity = 0;
		})

		
		console.log(this.newArr)
		

	}

	ngOnInit() {

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
