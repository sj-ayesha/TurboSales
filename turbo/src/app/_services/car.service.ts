import { Injectable } from '@angular/core';

export interface CarDetails {
  id: number;
  img: string;
  img1: string;
  img2: string;
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
}


@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() { }

  public getCarDetails(): Array<CarDetails> {
    return [{
      id: 1,
      img: '../../assets/img/Cars/mercedes.jpg',
      img1:'../../assets/img/Cars/mercedes3.jpg',
      img2:'../../assets/img/Cars/mercedes4.jpg',
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
      img1:'../../assets/img/Cars/MitsubishiLancerSedan/interior1.jpeg',
      img2:'../../assets/img/Cars/MitsubishiLancerSedan/interior2.jpg',
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
      img1:'../../assets/img/Cars/FordMustang/ford-mustang-interior1.png',
      img2:'../../assets/img/Cars/FordMustang/ford-mustang-interior2.png',
      title: 'Ford',
      series: 'Mustang Hybrid',
      stockNum: 'FOR001',
      Transmission: 'Automatic',
      fuel: 'Diesel',
      engine: 'Turbochargedengine',
      year: '2019',
      price: 10500,
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
      img1:'../../assets/img/Cars/AudiA7/interior1.jpeg',
      img2:'../../assets/img/Cars/AudiA7/interior2.jpeg',
      title: 'Audi',
      series: 'A7',
      stockNum: 'AUD001',
      Transmission: 'Automatic',
      fuel: 'Diesel',
      engine: 'Turbochargedengine',
      year: '2019',
      price: 10500,
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
      Transmission: 'Manual',
      fuel: 'Diesel',
      engine: 'Turbo',
      year: '2016',
      price: 5500,
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
      Transmission: 'Manual',
      fuel: 'Diesel',
      engine: 'Turbo',
      year: '2019',
      price: 555500,
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
      Transmission: 'Manual',
      fuel: 'Petrol',
      engine: 'Turbo',
      year: '2019',
      price: 700000,
      bodyType: 'Convertibles',
      miles: 1600
    }];
  }
}
