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

    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
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
        small: '../../assets/img/Cars/mercedes.jpg',
        medium: '../../assets/img/Cars/mercedes.jpg',
        big: '../../assets/img/Cars/mercedes.jpg'
      },
      {
        small: '../../assets/img/Cars/mercedes3.jpg',
        medium: '../../assets/img/Cars/mercedes3.jpg',
        big: '../../assets/img/Cars/mercedes3.jpg'
      },
      {
        small: '../../assets/img/Cars/mercedes4.jpg',
        medium: '../../assets/img/Cars/mercedes4.jpg',
        big: '../../assets/img/Cars/mercedes4.jpg'
      }
    ];
  }

  goToCars() {
    this.router.navigate(['/shopcars']);
  }
}
