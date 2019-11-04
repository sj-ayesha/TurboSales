import { Injectable } from '@angular/core';
import { CarDetails, CarService } from '../_services/car.service';


@Injectable({
  providedIn: 'root'
})

export class BuyCarService {

  private carDetails: CarDetails[];

  constructor(private carService: CarService) {
    this.carDetails = this.carService.getCarDetails();
  }

  findAll(): CarDetails[] {
    return this.carDetails;
  }

  find(id: number): CarDetails {
    return this.carDetails[this.getSelectedIndex(id)];
  }

  private getSelectedIndex(id: number) {
    for (var i = 0; i < this.carDetails.length; i++) {
      if (this.carDetails[i].id == id) {
        return i;
      }
    }
    return -1;
  }
}
