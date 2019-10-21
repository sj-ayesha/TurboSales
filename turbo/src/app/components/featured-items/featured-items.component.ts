import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, NavigationEnd } from '@angular/router';
import { CarService, CarDetails } from '../../_services/car.service';

@Component({
  selector: 'app-featured-items',
  templateUrl: './featured-items.component.html',
  styleUrls: ['./featured-items.component.scss']
})
export class FeaturedItemsComponent implements OnInit {

  carDetails: Array<CarDetails>;

  constructor(private route: ActivatedRoute, private router: Router, private carService: CarService) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
    this.carDetails = this.carService.getCarDetails();
    this.displayFourItems()
  }

  onSelect(id: number) {
    this.router.navigate(['/shopcars', id]);
  }

  displayFourItems() {
    this.carDetails = this.carDetails.filter((car, idx) => idx < 4);
  }


}
