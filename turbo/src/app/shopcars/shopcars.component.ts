import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopcars',
  templateUrl: './shopcars.component.html',
  styleUrls: ['./shopcars.component.scss']
})
export class ShopcarsComponent implements OnInit {

  filterApplied = {}

  constructor() { }

  ngOnInit() {
  }

  // selectedPriceRange(arrFromChildFilter): void {
  //   this.filterApplied = {
  //     priceRange: arrFromChildFilter
  //   }
  // }

  selectedYear(arrFromChildFilter):void {
    this.filterApplied = {
      year: arrFromChildFilter
    }
  }

}
