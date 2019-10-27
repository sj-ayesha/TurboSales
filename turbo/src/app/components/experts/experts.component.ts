import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experts',
  templateUrl: './experts.component.html',
  styleUrls: ['./experts.component.scss']
})
export class ExpertsComponent implements OnInit {
  images = [  
    { img: "../../assets/img/half-man-1.jpg", text: "Car Dealer"},  
    { img: "../../assets/img/half-woman-1.jpg", text: "Service Dealer" },  
    { img: "../../assets/img/half-man-2.jpg", text: "Customer Care"},  
    { img: "../../assets/img/half-woman-2.jpg", text: "Car Dealer" },  
    { img: "../../assets/img/half-woman-3.jpg", text: "Finance Consultant" }
  ];
  
  slideConfig = {  
    "slidesToShow": 3,  
    "slidesToScroll": 3,  
    "dots": false,
    "prevArrow": false,
    "nextArrow": false,
    "infinite": true,
    "autoplay": true,
    "draggable": false,
    "autoplaySpeed": 1500,
    "responsive": [
    {
      "breakpoint": 812,
      "settings": {
        "slidesToShow": 1,
        "slidesToScroll": 1
      }
    },
    {
      "breakpoint": 1024,
      "settings": {
        "slidesToShow": 1,
        "slidesToScroll": 1
      }
    }
  ]

  };  

  constructor() { }

  ngOnInit() {
  }

}
