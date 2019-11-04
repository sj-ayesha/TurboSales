import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CarService, CarDetails } from '../_services/car.service';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { Item } from '../_entities/item.entity';
import { BuyCarService } from '../_services/buy-car.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {

  public carId;
  carDetails: Array<CarDetails>;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  private items: Item[] = [];
  private total: number = 0;
  private totalQuantity: number = 0;

  contactForm: FormGroup;
  submitted = false;
  error: string;
  showMsg: boolean = false;
  showCartMessage: boolean = false;

  namePattern = "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$";
  emailPattern = "[^@]+@[^\.]+\..+";
  phonePattern = "(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})";

  constructor(private route: ActivatedRoute, private router: Router, private carService: CarService, private buyCarService: BuyCarService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.carDetails = this.carService.getCarDetails();
      this.carDetails = this.carDetails.filter(data => data.id === id);
    });


    this.galleryOptions = [
      {
        width: '100%',
        height: '600px',
        thumbnailsColumns: 3,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: this.carDetails[0].img,
        medium: this.carDetails[0].img,
        big: this.carDetails[0].img
      },
      {
        small: this.carDetails[0].img1,
        medium: this.carDetails[0].img1,
        big: this.carDetails[0].img1
      },
      {
        small: this.carDetails[0].img2,
        medium: this.carDetails[0].img2,
        big: this.carDetails[0].img2
      }
    ];

    this.contactForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern(this.namePattern)]],
      lastName: ['', [Validators.required, Validators.pattern(this.namePattern)]],
      emailAdd: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      phone: ['', [Validators.required, Validators.pattern(this.phonePattern)]],
      message: ['', Validators.required]
    });
  }

  incrementCart() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.carDetails = this.carService.getCarDetails();
    this.carDetails = this.carDetails.filter(data => data.id === id);
    console.log("adding", this.carDetails);

    this.carService.setUrl(this.carDetails[0].id);


    if (id) {
      var item: Item = {
        product: this.buyCarService.find(id),
        quantity: 1
      };
      if (localStorage.getItem('cart') == null) {
        let cart: any = [];
        cart.push(JSON.stringify(item));
        localStorage.setItem('cart', JSON.stringify(cart));
      } else {
        let cart: any = JSON.parse(localStorage.getItem('cart'));
        let index: number = -1;
        for (var i = 0; i < cart.length; i++) {
          let item: Item = JSON.parse(cart[i]);
          if (item.product.id == id) {
            index = i;
            break;
          }
        }
        if (index == -1) {
          cart.push(JSON.stringify(item));
          localStorage.setItem('cart', JSON.stringify(cart));
        } else {
          let item: Item = JSON.parse(cart[index]);
          item.quantity += 1;
          cart[index] = JSON.stringify(item);
          localStorage.setItem("cart", JSON.stringify(cart));
        }
      }
    }
    this.loadCart();

    this.showCartMessage = true;
  }

  loadCart(): void {
    this.total = 0;
    this.totalQuantity = 0;
    this.items = [];
    let cart = JSON.parse(localStorage.getItem('cart'));
    for (var i = 0; i < cart.length; i++) {
      let item = JSON.parse(cart[i]);
      this.items.push({
        product: item.product,
        quantity: item.quantity
      });
      this.total += item.product.price * item.quantity;
      this.totalQuantity += 0 + item.quantity;
    }
    localStorage.setItem("quantity", JSON.stringify(this.totalQuantity));
  }

  get f() { return this.contactForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.contactForm.invalid) {
      return;
      console.log(this.submitted);
    }
    else {
      this.showMsg = true;
    }

    setTimeout(() => {   
      this.showMsg = false;
      this.submitted = false;
      this.contactForm.reset();
    }, 2000);
  }

  close() {
    this.submitted = false;
    console.log(this.submitted);
  }

  goToCars() {
    this.router.navigate(['/shopcars']);
  }
}
