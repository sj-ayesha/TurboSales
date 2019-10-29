import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, NavigationEnd } from '@angular/router';
import { CarService, CarDetails } from '../../_services/car.service';

@Component({
  selector: 'app-featured-items',
  templateUrl: './featured-items.component.html',
  styleUrls: ['./featured-items.component.scss']
})
export class FeaturedItemsComponent implements OnInit {

  carDetails: Array<CarDetails>;

  constructor(private route: ActivatedRoute, private router: Router, private carService: CarService, private el:ElementRef) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
    this.carDetails = this.carService.getCarDetails();
    this.displayFourItems();
  }

  onSelect(id: number) {
    this.router.navigate(['/shopcars', id]);
  }

  displayFourItems() {
    this.carDetails = this.carDetails.filter((car, idx) => idx < 4);
  }

  // alignItem() {
  //   let maxHeightTitle: number = 0;
  //   let itemTitle = document.querySelector(".car-title");
  //   let itemContainer = document.querySelector(".featured-box") as HTMLElement;

  //     if (itemTitle.el.nativeElement.offsetHeight() >= maxHeightTitle) {
  //       maxHeightTitle = itemTitle.height();
  //     }

  //   let newItemHeight = {
  //     'height': maxHeightTitle
  //   }

  //     return newItemHeight;


  // }

  // alignItem() {
  //   let maxHeightTitle: number = 0;
  //   let itemContainer = document.querySelector(".featured-box");

  //   let itemTitle = {
  //     'height': 'auto'
  //   }

  //   // itemContainer.each(()=>{
  //   //   let title = itemContainer.find(itemTitle);

  //   //   if (title.height() >= maxHeightTitle) {
  //   //     maxHeightTitle = title.height();
  //   //   }
  //   // });

  //   // itemTitle.style.height(maxHeightTitle);

  // }


}
