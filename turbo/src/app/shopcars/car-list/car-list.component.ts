import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit, OnChanges {

  @Input() currentFilter: any;

  cardetails: any[];
  constructor() {
    this.initialiseCarDetails();
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes', changes);
    if (changes.currentFilter) {
      const priceRange = changes.currentFilter.currentValue.priceRange;
      const year = changes.currentFilter.currentValue.year;

      if (year.length) {
        this.initialiseCarDetails();

        this.cardetails = this.cardetails.filter((carDetail) => {
          return carDetail;

        }) || [];
      }

      // if (priceRange.length) {
      //   const minPrice = priceRange[0].range.min;
      //   const maxPrice = priceRange[priceRange.length - 1].range.max;

      //   this.initialiseCarDetails();

      //   this.cardetails = this.cardetails.filter((carDetail) => {
      //     if (carDetail.price >= minPrice && carDetail.price <= maxPrice) {
      //       return carDetail;
      //     }
      //   }) || [];
      // }

      console.log('priceRange', priceRange);
    }
  }

  private initialiseCarDetails(): void {
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
      title: 'Honda Civic',
      stockNum: 'HON001',
      Transmission: 'Automatic',
      fuel: 'Diesel',
      engine: 'Turbochargedengine',
      year: '2017',
      price: 10500
    }];
  }

}
