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
      img2:'../../assets/img/Cars/mercedes5.jpg',
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
      img1:'../../assets/img/Cars/mercedes3.jpg',
      img2:'../../assets/img/Cars/mercedes5.jpg',
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
      img1:'../../assets/img/Cars/mercedes3.jpg',
      img2:'../../assets/img/Cars/mercedes5.jpg',
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
      img1:'../../assets/img/Cars/mercedes3.jpg',
      img2:'../../assets/img/Cars/mercedes5.jpg',
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
      img1:'../../assets/img/Cars/mercedes3.jpg',
      img2:'../../assets/img/Cars/mercedes5.jpg',
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
