import { Component, OnInit } from '@angular/core';
import { Item } from '../../_entities/item.entity';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  	private items: Item[] = [];
	private total: number = 0;
	private totalQuantity: number = 0;
	billingForm: FormGroup;
	submitted = false;
	error: string;
	showMsg: boolean = false;
	namePattern = "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$";
	emailPattern = "[^@]+@[^\.]+\..+";
	zipcode = "^\d{5}(?:[-\s]\d{4})?$";
	creditCardNum = "4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11}";
	expiryDate = "^\d{2}\/\d{2}$";
	cvv = "/^[0-9]{3,4}$/";

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
	this.loadCart();
	this.billingForm = this.formBuilder.group({
		firstName: ['', [Validators.required, Validators.pattern(this.namePattern)]],
		lastName: ['', [Validators.required, Validators.pattern(this.namePattern)]],
		emailAdd: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
		city: ['', [Validators.required, Validators.pattern(this.namePattern)]],
		state: ['', [Validators.required, Validators.pattern(this.namePattern)]],
		zipcode: ['', [Validators.required, Validators.pattern(this.zipcode)]],
		cardname: ['', Validators.required],
		cardnumber: ['', [Validators.required, Validators.pattern(this.creditCardNum)]],
		expdate: ['', [Validators.required, Validators.pattern(this.expiryDate)]],
		cvv: ['', [Validators.required, Validators.pattern(this.cvv)]]
	  });
  }

  
  get f() { return this.billingForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.billingForm.invalid) {
		console.log("invalid");
      return;
    }
    else {
      this.showMsg = true;
    }

    setTimeout(() => {
      this.showMsg = false;
      this.submitted = false;
    }, 2000);
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
