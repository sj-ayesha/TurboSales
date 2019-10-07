import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {

  images = [  
    { img: "../../assets/img/Brand/honda.png" },  
    { img: "../../assets/img/Brand/acura.png" },  
    { img: "../../assets/img/Brand/kia.png" },  
    { img: "../../assets/img/Brand/lamborghini.png" },  
    { img: "../../assets/img/Brand/mercedes.png" },
    { img: "../../assets/img/Brand/audi.png" },  
    { img: "../../assets/img/Brand/ford.png" },  
    { img: "../../assets/img/Brand/hyundai.png" }, 
    { img: "../../assets/img/Brand/jeep.png" },  
    { img: "../../assets/img/Brand/porsche.png" },  
    { img: "../../assets/img/Brand/volkswagen.png" }
  ];

  slideConfig = {  
    "slidesToShow": 4,  
    "slidesToScroll": 4,  
    "dots": true,  
    "infinite": true,
    "autoplay": true,
    "draggable": false,
    "autoplaySpeed": 1500
  };  

  constructor() { }

  ngOnInit() {
  }

}
