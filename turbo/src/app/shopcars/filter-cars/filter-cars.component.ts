import { Component, OnInit, EventEmitter, Output, ViewChildren, QueryList, ElementRef } from '@angular/core';

@Component({
  selector: 'app-filter-cars',
  templateUrl: './filter-cars.component.html',
  styleUrls: ['./filter-cars.component.scss']
})
export class FilterCarsComponent implements OnInit {


  @Output() filterEmitter = new EventEmitter();
  @ViewChildren("checkboxes") checkboxes: QueryList<ElementRef>;

  public priceOptions = [
    { name: 'Rs0 - Rs100 000', value: 'Rs0 - Rs100 000', checked: true, range: { min: 0, max: 100000 } },
    { name: 'Rs100 000 - Rs300 000', value: 'Rs100 000 - Rs300 000', range: { min: 100001, max: 300000 }, checked: false },
    { name: 'Rs300 000 - Rs500 000', value: 'Rs300 000 - Rs500 000', range: { min: 300001, max: 500000 }, checked: false },
    { name: 'Rs500 000 - Rs700 000', value: 'Rs500 000 - Rs700 000', range: { min: 500001, max: 700000 }, checked: false }
  ];

  public brandOptions = [
    { name: 'Honda', value: 'Honda', checked: true },
    { name: 'Acura', value: 'Acura', checked: false },
    { name: 'Mercedes', value: 'Mercedes', checked: false },
    { name: 'Kia', value: 'Kia', checked: false },
    { name: 'Lamborghini', value: 'Lamborghini', checked: false },
    { name: 'Audi', value: 'Audi', checked: false },
    { name: 'Ford', value: 'Ford', checked: false },
    { name: 'Jeep', value: 'Jeep', checked: false },
    { name: 'Hyundai', value: 'Hyundai', checked: false },
    { name: 'Volkswagen', value: 'Volkswagen', checked: false },

  ];

  public yearOptions = [
    { name: '2019', value: '2019', checked: true },
    { name: '2018', value: '2018', checked: false },
    { name: '2017', value: '2017', checked: false },
    { name: '2016', value: '2016', checked: false }
  ];
  ngOnInit() {
    this.onFilter();

  }

  onFilter() {
    const arrOptions = this.priceOptions.filter((priceOption) => priceOption.checked);
    const arrOptionsBrand = this.brandOptions.filter((brandOption) => brandOption.checked);
    const arrOptionsYear = this.yearOptions.filter((yearOption) => yearOption.checked);

    let arrOfObj = [arrOptions, arrOptionsBrand, arrOptionsYear];
    this.filterEmitter.emit(arrOfObj);
    console.log(arrOfObj);
  }
  
  // onFilterBrand() {
  //   const arrOptions = this.brandOptions.filter((brandOption) => brandOption.checked);
  //   this.filterEmitter.emit(arrOptions);
  // }



}
