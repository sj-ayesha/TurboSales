import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit, OnChanges {

  @Input() currentFilter: any;

  arr: any[] = [];
  cardetails: any[];
  constructor() {
    this.initialiseCarDetails();
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {

    if (changes.currentFilter) {
      const priceRange = changes.currentFilter.currentValue.priceRange;
      const brand = changes.currentFilter.currentValue.brand;
      const year = changes.currentFilter.currentValue.year;

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
      this.initialiseCarDetails();

      this.arr = [];
      if (brand.length && year.length) {
       

        this.cardetails.filter((detail) => {


          brand.filter(element => {
            console.log(detail.title),
              console.log(element.name)
            if (detail.title == element.name) {
              this.arr.push(detail);
            }
          });

          year.filter(element => {
            console.log(detail.year),
              console.log(element.name)
            if (detail.year == element.name) {
              this.arr.push(detail);
            }
          });

          console.log('both');

          //return detail.title == brand[0].name;
        })

        console.log('arr', this.arr);
      }


      else if (year.length) {
        this.initialiseCarDetails();

        this.arr = [];

        this.cardetails.filter((detail) => {


          year.filter(element => {
            console.log(detail.year),
              console.log(element.name)
            if (detail.year == element.name) {
              this.arr.push(detail);
            }
          });

          //return detail.title == brand[0].name;
        })

        console.log('arr', this.arr);
        console.log('year only');
      }

      else if (brand.length) {
        this.initialiseCarDetails();

        this.arr = [];

        this.cardetails.filter((detail) => {


          brand.filter(element => {
            console.log(detail.title),
              console.log(element.name)
            if (detail.title == element.name) {
              this.arr.push(detail);
            }
          });

          //return detail.title == brand[0].name;
        })

        console.log('arr', this.arr);
        console.log('brand only');
      }
    }
  }

  // private initialiseCarDetails(): void {
  //   this.cardetails = [{
  //     title: 'Suzuki',
  //     power: '69bhp@6000rpm',
  //     mileage: 'km/liter',
  //     fuel: 'Diesel',
  //     year: '2019',
  //     price: 100000
  //   },
  //   {
  //     title: 'Nissan',
  //     power: '69bhp@6000rpm',
  //     mileage: 'km/liter',
  //     fuel: 'Diesel',
  //     year: '2015',
  //     price: 300000
  //   },
  //   {
  //     title: 'Kia',
  //     power: '69bhp@6000rpm',
  //     mileage: 'km/liter',
  //     fuel: 'Diesel',
  //     year: '2019',
  //     price: 300000
  //   },
  //   {
  //     title: 'Kia',
  //     power: '69bhp@6000rpm',
  //     mileage: 'km/liter',
  //     fuel: 'Diesel',
  //     year: '2017',
  //     price: 300000
  //   },
  //   {
  //     title: 'Kia',
  //     power: '69bhp@6000rpm',
  //     mileage: 'km/liter',
  //     fuel: 'Diesel',
  //     year: '2018',
  //     price: 300000
  //   },
  //   {
  //     title: 'Mitsubishi',
  //     power: '69bhp@6000rpm',
  //     mileage: 'km/liter',
  //     fuel: 'Petrol',
  //     year: '2011',
  //     price: 500000
  //   }];
  // }

  initialiseCarDetails(): void {
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
