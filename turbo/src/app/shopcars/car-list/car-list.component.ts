import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from "../../_services/car.service";

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit, OnChanges {

  @Input() currentFilter: any;

  // arr: any[] = [];
  cardetails: any[];
  details: {
    id: number;
    img: string;
    title: string;
    series: string;
    stockNum: string;
    Transmission: string;
    fuel: string;
    engine: string;
    year: string;
    price: number;
    bodyType: string;
    miles: number;
  }[];

  constructor(private router: Router, private carService: CarService) {
    this.initialiseCarDetails();
  }

  ngOnInit() {
    this.details = this.carService.getCarDetails()
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
            return carDetail;
          }
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
            return cardetail;
          }
        });
      }

      // For Brand
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

      //For BodyType
      if (bodyType.length) {
        const arrBodyTypeNames = bodyType.map((bodyTypeName) => {
          return bodyTypeName.name.toLowerCase();
        });

        this.cardetails = this.cardetails.filter((cardetail) => {
          if (arrBodyTypeNames.includes(cardetail.bodyType.toLowerCase())) {
            return cardetail;
          }
        });
      }

    }

  }


  initialiseCarDetails() {
    this.cardetails = [{
      id: 1,
      img: '../../assets/img/Cars/mercedes.jpg',
      title: 'MERCEDES',
      series: 'Benz E-Class',
      stockNum: 'MER001',
      Transmission: 'Automatic',
      fuel: 'Diesel',
      engine: 'Turbocharged four-cylinder engine',
      year: '2019',
      price: 21500,
      bodyType: 'Sedans',
      miles: 1800
    },
    {
      id: 2,
      img: '../../assets/img/Cars/Lancer.jpg',
      title: 'Mitsubishi',
      series: 'Lancer Sedan',
      stockNum: 'MIT001',
      Transmission: 'Automatic',
      fuel: 'Diesel',
      engine: 'Turbochargedengine',
      year: '2015',
      price: 10500,
      bodyType: 'Coupes',
      miles: 2000
    },
    {
      id: 3,
      img: '../../assets/img/Cars/FordMustang.jpg',
      title: 'Ford',
      series: 'Mustang Hybrid',
      stockNum: 'FOR001',
      Transmission: 'Automatic',
      fuel: 'Diesel',
      engine: 'Turbochargedengine',
      year: '2019',
      price: 10500,
      bodyType: 'Convertibles',
      miles: 1500
    },
    {
      id: 4,
      img: '../../assets/img/Cars/kiaRio.jpg',
      title: 'Kia',
      series: 'Rio Hatchback',
      stockNum: 'KIA001',
      Transmission: 'Automatic',
      fuel: 'Diesel',
      engine: 'Turbochargedengine',
      year: '2018',
      price: 10500,
      bodyType: 'SUVs',
      miles: 1000
    },
    {
      id: 5,
      img: '../../assets/img/Cars/audi.jpg',
      title: 'Audi',
      series: 'A7',
      stockNum: 'AUD001',
      Transmission: 'Automatic',
      fuel: 'Diesel',
      engine: 'Turbochargedengine',
      year: '2019',
      price: 10500,
      bodyType: 'Vans',
      miles: 1500
    }];
  }

}
