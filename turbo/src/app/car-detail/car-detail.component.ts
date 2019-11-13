import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CarService, CarDetails } from '../_services/car.service';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { Item } from '../_entities/item.entity';
import { BuyCarService } from '../_services/buy-car.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TouchSequence } from 'selenium-webdriver';
import { CartService } from '../_services/cart.service';

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

  namePattern = "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$";//Alphabets except special char & num
  emailPattern = "[^@]+@[^\.]+\..+";//must have @ .
  phonePattern = "^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]{8,12}$";//digit contains - + 8 to 12

  constructor(private route: ActivatedRoute, private router: Router, private carService: CarService, private buyCarService: BuyCarService, private formBuilder: FormBuilder, private cartService: CartService) { }

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

  public addToCart(product: CarDetails) {
    console.log(product,'one');
    this.cartService.addToCart(product);
    this.showCartMessage = true;
    
    // this.router.navigateByUrl('/');
  }
}
