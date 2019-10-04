import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-cars',
  templateUrl: './filter-cars.component.html',
  styleUrls: ['./filter-cars.component.scss']
})
export class FilterCarsComponent implements OnInit {

  @Output() filterEmitter = new EventEmitter();

  public priceOptions = [
    { name: 'Rs0 - Rs100 000', value: 'Rs0 - Rs100 000', checked: true, range: { min: 0, max: 100000 } },
    { name: 'Rs100 000 - Rs300 000', value: 'Rs100 000 - Rs300 000', range: { min: 100001, max: 300000 }, checked: false },
    { name: 'Rs300 000 - Rs500 000', value: 'Rs300 000 - Rs500 000', range: { min: 300001, max: 500000 }, checked: false },
    { name: 'Rs500 000 - Rs700 000', value: 'Rs500 000 - Rs700 000', range: { min: 500001, max: 700000 }, checked: false }
  ];

  public yearOptions = [
    { name: '2019', value: '2019', checked: true },
    { name: '2018', value: '2018', checked: false },
    { name: '2017', value: '2017',  checked: false },
    { name: '2016', value: '2016', checked: false },
    { name: '2015', value: '2015', checked: false }
  ];

  ngOnInit() {
    this.onFilter();
  }

  onFilter() {
    const arrYearOptions = this.yearOptions.filter((yearOption)=> yearOption.checked);
    // const arrOptions = this.priceOptions.filter((priceOption) => priceOption.checked);
    // this.filterEmitter.emit(arrOptions);
    this.filterEmitter.emit(arrYearOptions);
  }

}
                     