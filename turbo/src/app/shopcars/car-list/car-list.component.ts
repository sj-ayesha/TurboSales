import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit, OnChanges {

  @Input() currentFilter: any;

  // arr: any[] = [];
  cardetails: any[];
  constructor() {
    this.initialiseCarDetails();
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    //console.warn(changes)
    if (changes.currentFilter) {
      const priceRange = changes.currentFilter.currentValue.priceRange;
      const brand = changes.currentFilter.currentValue.brand;
      const year = changes.currentFilter.currentValue.year;

      this.initialiseCarDetails();

      // FOR PRICE RANGE
      if (priceRange.length) {
        const minPrice = priceRange[0].range.min;
        const maxPrice = priceRange[priceRange.length - 1].range.max;

        this.cardetails = this.cardetails.filter((carDetail) => {
          if ( priceRange.length && carDetail.price >= minPrice && carDetail.price <= maxPrice) {
            return carDetail;
          }
        }) || [];

      }

      // FOR YEAR
      if (year.length) {

        const arrayYears = year.map((yearObj) => {
          // tslint:disable-next-line: radix
          return (yearObj.value);

        });

        this.cardetails = this.cardetails.filter((cardetail) => {
          if (arrayYears.includes(cardetail.year)) {
            console.log('year:', cardetail)
            return cardetail;
          }
        });
      }

      // FOR BRAND
      if (brand.length) {
        const arrBrandNames = brand.map((brandDetail) => {
          return brandDetail.name.toLowerCase();
        });

        this.cardetails = this.cardetails.filter((cardetail) => {
          if (arrBrandNames.includes(cardetail.title.toLowerCase())) {
            return cardetail;
          }
        });
      }

    }

  }

  
  initialiseCarDetails() {
    this.cardetails = [{
      img: '../../assets/img/mercedes-benz.jpg',
      title: 'MERCEDES-BENZ CLA 250',
      stockNum: 'MER001',
      Transmission: 'Automatic',
      fuel: 'Diesel',
      engine: 'Turbocharged four-cylinder engine',
      year: '2019',
      price: 21500
    },
    {
      img: '../../assets/img/mercedes-benz.jpg',
      title: 'Mitsubishi Lancer',
      stockNum: 'MIT001',
      Transmission: 'Automatic',
      fuel: 'Diesel',
      engine: 'Turbochargedengine',
      year: '2015',
      price: 10500
    },
    {
      img: '../../assets/img/mercedes-benz.jpg',
      title: 'Mitsubishi Lancer',
      stockNum: 'MIT001',
      Transmission: 'Automatic',
      fuel: 'Diesel',
      engine: 'Turbochargedengine',
      year: '2019',
      price: 10500
    },
    {
      img: '../../assets/img/mercedes-benz.jpg',
      title: 'Mitsubishi Lancer',
      stockNum: 'MIT001',
      Transmission: 'Automatic',
      fuel: 'Diesel',
      engine: 'Turbochargedengine',
      year: '2018',
      price: 10500
    },
    {
      img: '../../assets/img/mercedes-benz.jpg',
      title: 'Honda',
      stockNum: 'HON001',
      Transmission: 'Automatic',
      fuel: 'Diesel',
      engine: 'Turbochargedengine',
      year: '2019',
      price: 10500
    }];
  }

}
