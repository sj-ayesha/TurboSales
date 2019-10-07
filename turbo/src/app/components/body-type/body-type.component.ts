import { Component, OnInit, ViewChildren, QueryList, ElementRef, } from '@angular/core';

@Component({
  selector: 'app-body-type',
  templateUrl: './body-type.component.html',
  styleUrls: ['./body-type.component.scss']
})
export class BodyTypeComponent implements OnInit {

  bodyTypes = [{
    id: 'sedans',
    img: '../../../assets/img/bodyType/Sedans.png',
    text: 'Sedans'
  },
  {
    id: 'coupes',
    img: '../../../assets/img/bodyType/Coupes.png',
    text: 'Cedans'
  },
  {
    id: 'convertibles',
    img: '../../../assets/img/bodyType/Convertibles.png',
    text: 'convertibles'
  },
  {
    id: 'suvs',
    img: '../../../assets/img/bodyType/Suvs.png',
    text: 'Suvs'
  },
  {
    id: 'vans',
    img: '../../../assets/img/bodyType/Vans.png',
    text: 'Vans'
  },
  {
    id: 'trucks',
    img: '../../../assets/img/bodyType/truck.png',
    text: 'Trucks'
  }

]

  constructor() { }

  @ViewChildren("checkboxes") checkboxes: QueryList<ElementRef>;
  

  ngOnInit() {
  }

  onChecked(e,bodyType) {
    if (e.target.checked) {
      bodyType['checkValue'] = true;
    } else {
      bodyType['checkValue'] = false;
    }
  }

  clearSelection() {
    this.checkboxes.forEach((element) => {
      element.nativeElement.checked = false;
    });

    this.bodyTypes.forEach((bodyType) => {
      bodyType['checkValue'] = false;
    });
  }

  
}
