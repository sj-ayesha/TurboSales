import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CarService, CarDetails } from '../_services/car.service';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';


@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {

  public carId;
  carDetails: Array<CarDetails>;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private route: ActivatedRoute, private router: Router, private carService: CarService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.carDetails = this.carService.getCarDetails();
      this.carDetails = this.carDetails.filter(data => data.id === id);
    });

    console.log(this.carDetails);

    this.galleryOptions = [
      {
        width: '100%',
        height: '600px',
        thumbnailsColumns: 3,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: this.carDetails[0].img,
        medium: this.carDetails[0].img,
        big: this.carDetails[0].img
      },
      {
        small: this.carDetails[0].img1,
        medium: this.carDetails[0].img1,
        big: this.carDetails[0].img1
      },
      {
        small: this.carDetails[0].img2,
        medium: this.carDetails[0].img2,
        big: this.carDetails[0].img2
      }
    ];
  }

  goToCars() {
    this.router.navigate(['/shopcars']);
  }
}
