import { Injectable } from '@angular/core';

export interface CarDetails {
  id: number;
  img: string;
  img1: string;
  img2: string;
  title: string;
  series: string;
  stockNum: string;
  transmissionImg: string;
  Transmission: string;
  fuelImg: string;
  fuel: string;
  engine: string;
  yearImg: string;
  year: string;
  price: number;
  bodyTypeImg: string;
  bodyType: string;
  miles: number;
}


@Injectable({
  providedIn: 'root'
})

export class CarService {

  constructor() { }

  private url: number;

  public setUrl(url: number): void {
    console.log(url);
    this.url = url;
  }

  public getUrl(): number {
    return this.url;
  }

  public getCarDetails(): Array<CarDetails> {
    return [{
      id: 1,
      img: '../../assets/img/Cars/mercedes.jpg',
      img1:'../../assets/img/Cars/mercedes3.jpg',
      img2:'../../assets/img/Cars/mercedes4.jpg',
      title: 'MERCEDES',
      series: 'Benz E-Class',
      stockNum: 'MER001',
      transmissionImg: '../../assets/img/Icon/automatic-transmission.png',
      Transmission: 'Automatic',
      fuelImg: '../../assets/img/Icon/fuel.png',
      fuel: 'Diesel',
      engine: 'Turbocharged four-cylinder engine',
      yearImg: '../../assets/img/Icon/calendar.png',
      year: '2019',
      price: 21500,
      bodyTypeImg: '../../assets/img/Icon/sedan-car.png',
      bodyType: 'Sedans',
      miles: 1800
    },
    {
      id: 2,
      img: '../../assets/img/Cars/Lancer.jpg',
      img1:'../../assets/img/Cars/MitsubishiLancerSedan/interior1.jpeg',
      img2:'../../assets/img/Cars/MitsubishiLancerSedan/interior2.jpg',
      title: 'Mitsubishi',
      series: 'Lancer Sedan',
      stockNum: 'MIT001',
      transmissionImg: '../../assets/img/Icon/automatic-transmission.png',
      Transmission: 'Automatic',
      fuelImg: '../../assets/img/Icon/fuel.png',
      fuel: 'Diesel',
      engine: 'Turbochargedengine',
      yearImg: '../../assets/img/Icon/calendar.png',
      year: '2015',
      price: 10500,
      bodyTypeImg: '../../assets/img/Icon/coupe-car.png',
      bodyType: 'Coupes',
      miles: 2000
    },
    {
      id: 3,
      img: '../../assets/img/Cars/FordMustang.jpg',
      img1:'../../assets/img/Cars/FordMustang/ford-mustang-interior1.png',
      img2:'../../assets/img/Cars/FordMustang/ford-mustang-interior2.png',
      title: 'Ford',
      series: 'Mustang Hybrid',
      stockNum: 'FOR001',
      transmissionImg: '../../assets/img/Icon/automatic-transmission.png',
      Transmission: 'Automatic',
      fuelImg: '../../assets/img/Icon/fuel.png',
      fuel: 'Diesel',
      engine: 'Turbochargedengine',
      yearImg: '../../assets/img/Icon/calendar.png',
      year: '2019',
      price: 10500,
      bodyTypeImg: '../../assets/img/Icon/coupe-car.png',
      bodyType: 'Coupes',
      miles: 1500
    },
    {
      id: 4,
      img: '../../assets/img/Cars/kiaRio.jpg',
      img1:'../../assets/img/Cars/KiaRio/interior1.jpg',
      img2:'../../assets/img/Cars/KiaRio/interior2.jpg',
      title: 'Kia',
      series: 'Rio Hatchback',
      stockNum: 'KIA001',
      transmissionImg: '../../assets/img/Icon/automatic-transmission.png',
      Transmission: 'Automatic',
      fuelImg: '../../assets/img/Icon/fuel.png',
      fuel: 'Diesel',
      engine: 'Turbochargedengine',
      yearImg: '../../assets/img/Icon/calendar.png',
      year: '2018',
      price: 10500,
      bodyTypeImg: '../../assets/img/Icon/car-suv.png',
      bodyType: 'SUVs',
      miles: 1000
    },
    {
      id: 5,
      img: '../../assets/img/Cars/audi.jpg',
      img1:'../../assets/img/Cars/AudiA7/interior1.jpeg',
      img2:'../../assets/img/Cars/AudiA7/interior2.jpeg',
      title: 'Audi',
      series: 'A7',
      stockNum: 'AUD001',
      transmissionImg: '../../assets/img/Icon/automatic-transmission.png',
      Transmission: 'Automatic',
      fuelImg: '../../assets/img/Icon/fuel.png',
      fuel: 'Diesel',
      engine: 'Turbochargedengine',
      yearImg: '../../assets/img/Icon/calendar.png',
      year: '2019',
      price: 10500,
      bodyTypeImg: '../../assets/img/Icon/coupe-car.png',
      bodyType: 'Coupes',
      miles: 1500
    },
    {
      id: 6,
      img: '../../assets/img/Cars/Vans/Caddy.jpg',
      img1:'../../assets/img/Cars/Vans/interior2.jpg',
      img2:'../../assets/img/Cars/Vans/interior1.jpeg',
      title: 'Volkswagen',
      series: 'Caddy',
      stockNum: 'VOL001',
      transmissionImg: '../../assets/img/Icon/manual-transmission.png',
      Transmission: 'Manual',
      fuelImg: '../../assets/img/Icon/fuel.png',
      fuel: 'Diesel',
      engine: 'Turbo',
      yearImg: '../../assets/img/Icon/calendar.png',
      year: '2016',
      price: 5500,
      bodyTypeImg: '../../assets/img/Icon/van.png',
      bodyType: 'Vans',
      miles: 1700
    },
    {
      id: 7,
      img: '../../assets/img/Cars/Truck/mercedesTruck.jpeg',
      img1:'../../assets/img/Cars/Truck/interior1.jpg',
      img2:'../../assets/img/Cars/Truck/interior2.jpg',
      title: 'Mercedes',
      series: 'Benz',
      stockNum: 'MER002',
      transmissionImg: '../../assets/img/Icon/manual-transmission.png',
      Transmission: 'Manual',
      fuelImg: '../../assets/img/Icon/fuel.png',
      fuel: 'Diesel',
      engine: 'Turbo',
      yearImg: '../../assets/img/Icon/calendar.png',
      year: '2019',
      price: 555500,
      bodyTypeImg: '../../assets/img/Icon/truck.png',
      bodyType: 'Trucks',
      miles: 1700
    },
    {
      id: 8,
      img: '../../assets/img/Cars/Jeep/Jeep.jpg',
      img1:'../../assets/img/Cars/Jeep/interior1.jpg',
      img2:'../../assets/img/Cars/Jeep/interior2.jpg',
      title: 'Jeep',
      series: 'Wrangler',
      stockNum: 'JEE001',
      transmissionImg: '../../assets/img/Icon/manual-transmission.png',
      Transmission: 'Manual',
      fuelImg: '../../assets/img/Icon/fuel.png',
      fuel: 'Petrol',
      engine: 'Turbo',
      yearImg: '../../assets/img/Icon/calendar.png',
      year: '2019',
      price: 700000,
      bodyTypeImg: '../../assets/img/Icon/convertible.png',
      bodyType: 'Convertibles',
      miles: 1600
    }];
  }
}
