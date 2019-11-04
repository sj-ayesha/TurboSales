import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from "../../_services/car.service";
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit, OnChanges {
  
  actualPage: number = 1;
  order: string = 'title';
  reverse: boolean = false;
  sortedCollection: any[];
  displayMode: number = 1;
  numberOfItems: string = "6";

  @Input() currentFilter: any;

  // arr: any[] = [];
  cardetails: any[];
  details: {
    // id: number;
    // img: string;
    // title: string;
    // series: string;
    // stockNum: string;
    // Transmission: string;
    // fuel: string;
    // engine: string;
    // year: string;
    // price: number;
    // bodyType: string;
    // miles: number;
  }[];

  constructor(private router: Router, private carService: CarService, private orderPipe: OrderPipe) {
    this.initialiseCarDetails();
    this.sortedCollection = orderPipe.transform(this.cardetails, 'title');
  }

  ngOnInit() {
    this.details = this.carService.getCarDetails();
  }

  onSelect(id: number) {
    this.router.navigate(['/shopcars', id]);
  }


  ngOnChanges(changes: SimpleChanges) {
    //console.warn(changes)
    if (changes.currentFilter) {
      const priceRange = changes.currentFilter.currentValue.priceRange;
      const brand = changes.currentFilter.currentValue.brand;
      const year = changes.currentFilter.currentValue.year;
      const bodyType = changes.currentFilter.currentValue.bodyType;

      this.initialiseCarDetails();

      // FOR PRICE RANGE
      if (priceRange.length) {
        const minPrice = priceRange[0].range.min;
        const maxPrice = priceRange[priceRange.length - 1].range.max;

        this.cardetails = this.cardetails.filter((carDetail) => {
          if (priceRange.length && carDetail.price >= minPrice && carDetail.price <= maxPrice) {
            this.scrollToTop();
            // this.noAvailaibilityMsg = false;
            return carDetail;
          }
          // else {
          //   this.noAvailaibilityMsg = true;
          // }
        }) || [];
      }

      // For Year
      if (year.length) {

        const arrayYears = year.map((yearObj) => {
          // tslint:disable-next-line: radix
          return (yearObj.value);

        });

        this.cardetails = this.cardetails.filter((cardetail) => {
          if (arrayYears.includes(cardetail.year)) {
            this.scrollToTop();
            // this.noAvailaibilityMsg = false;
            return cardetail;
          }
          // else {
          //   this.noAvailaibilityMsg = true;
          // }
        });
      }

      // For Brand
      if (brand.length) {
        const arrBrandNames = brand.map((brandDetail) => {
          return brandDetail.name.toLowerCase();
        });

        this.cardetails = this.cardetails.filter((cardetail) => {
          if (arrBrandNames.includes(cardetail.title.toLowerCase())) {
            this.scrollToTop();
            // this.noAvailaibilityMsg = false;
            return cardetail;
          }
          // else {
          //   this.noAvailaibilityMsg = true;
          // }
        });
      }

      //For BodyType
      if (bodyType.length) {
        const arrBodyTypeNames = bodyType.map((bodyTypeName) => {
          return bodyTypeName.name.toLowerCase();
        });

        this.cardetails = this.cardetails.filter((cardetail) => {
          if (arrBodyTypeNames.includes(cardetail.bodyType.toLowerCase())) {
            this.scrollToTop();
            // this.noAvailaibilityMsg = false;
            return cardetail;
          }
          // else {
          //   this.noAvailaibilityMsg = true;
          // }
        });
      }

    }

  }

  onAdd() {
    this.numberOfItems = (<HTMLInputElement>document.getElementById('numberOfItems')).value;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  styleFilter(){
    let descIcon = document.getElementById('sortDescIcon');
    let ascIcon = document.getElementById('sortAscIcon');

    if(descIcon && descIcon.style.display == 'none') {
        descIcon.style.display = 'inline-block';
    } else {
        descIcon.style.display = 'none';
    }
    
    if(ascIcon && ascIcon.style.display == 'none') {
        ascIcon.style.display = 'inline-block';
    } else {
        ascIcon.style.display = 'none';
    }
  }

  styleFilterYear() {
    let descIcon = document.getElementById('sortDescIconYear');
    let ascIcon = document.getElementById('sortAscIconYear');

    if(descIcon && descIcon.style.display == 'none') {
        descIcon.style.display = 'inline-block';
    } else {
        descIcon.style.display = 'none';
    }
    
    if(ascIcon && ascIcon.style.display == 'none') {
        ascIcon.style.display = 'inline-block';
    } else {
        ascIcon.style.display = 'none';
    }
  }

  styleFilterPrice() {
    let descIcon = document.getElementById('sortDescIconPrice');
    let ascIcon = document.getElementById('sortAscIconPrice');

    if(descIcon && descIcon.style.display == 'none') {
        descIcon.style.display = 'inline-block';
    } else {
        descIcon.style.display = 'none';
    }
    
    if(ascIcon && ascIcon.style.display == 'none') {
        ascIcon.style.display = 'inline-block';
    } else {
        ascIcon.style.display = 'none';
    }
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

  onDisplayModeChange(mode: number): void {
    this.displayMode = mode;
  }


  initialiseCarDetails() {
    this.cardetails = this.carService.getCarDetails();
  }

}
