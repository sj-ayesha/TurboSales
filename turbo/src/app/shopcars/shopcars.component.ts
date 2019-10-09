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

  selectedFilter(arr): void {
    this.filterApplied = {
      priceRange: arr[0],
      brand: arr[1],
      year: arr[2],
      bodyType: arr[3]
    };
  }

  //   selectedColourChange(selectedColour: string) : void {
  //   this.filterApplied.color = selectedColour;
  // }

  //   selectedColourChange(selectedColour: string) : void {
  //   this.filterApplied.color = selectedColour;
  // }

}