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
    { name: '$0 - $100 000', value: '$0 - $100 000', checked: false, range: { min: 0, max: 100000 } },
    { name: '$100 000 - $300 000', value: '$100 000 - $300 000', range: { min: 100001, max: 300000 }, checked: false },
    { name: '$300 000 - $500 000', value: '$300 000 - $500 000', range: { min: 300001, max: 500000 }, checked: false },
    { name: '$500 000 - $700 000', value: '$500 000 - $700 000', range: { min: 500001, max: 700000 }, checked: false }
  ];

  public brandOptions = [
    { name: 'Honda', value: 'Honda', checked: false },
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
    { name: '2019', value: '2019', checked: false },
    { name: '2018', value: '2018', checked: false },
    { name: '2017', value: '2017', checked: false },
    { name: '2016', value: '2016', checked: false }
  ];

  public bodyTypeOptions = [
    { name: 'Sedans', value: 'Coupes', checked: false },
    { name: 'Coupes', value: 'Coupes', checked: false },
    { name: 'Convertibles', value: 'Convertibles', checked: false },
    { name: 'SUVs', value: 'SUVs', checked: false },
    { name: 'Vans', value: 'Vans', checked: false },
    { name: 'Trucks', value: 'Trucks', checked: false }
  ]

  ngOnInit() {
    this.onFilter();

  }

  onFilter() {
    const arrOptions = this.priceOptions.filter((priceOption) => priceOption.checked);
    const arrOptionsBrand = this.brandOptions.filter((brandOption) => brandOption.checked);
    const arrOptionsYear = this.yearOptions.filter((yearOption) => yearOption.checked);
    const arrOptionsBodyType = this.bodyTypeOptions.filter((bodyTypeOption) => bodyTypeOption.checked);

    let arrOfObj = [arrOptions, arrOptionsBrand, arrOptionsYear, arrOptionsBodyType];
    this.filterEmitter.emit(arrOfObj);
    console.log(arrOfObj);
  }
  
  // onFilterBrand() {
  //   const arrOptions = this.brandOptions.filter((brandOption) => brandOption.checked);
  //   this.filterEmitter.emit(arrOptions);
  // }



}
