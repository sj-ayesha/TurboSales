import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopcars',
  templateUrl: './shopcars.component.html',
  styleUrls: ['./shopcars.component.scss']
})
export class ShopcarsComponent implements OnInit {

  filterApplied = {};

  constructor() { }
  ngOnInit() {
  }

  selectedPriceRange(arr): void {
    this.filterApplied = {
      priceRange: arr[0],
      brand: arr[1],
      year: arr[2]
    };
  }

  //   selectedColourChange(selectedColour: string) : void {
  //   this.filterApplied.color = selectedColour;
  // }

  //   selectedColourChange(selectedColour: string) : void {
  //   this.filterApplied.color = selectedColour;
  // }

}