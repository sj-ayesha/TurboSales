import { NgModule } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ShopcarsComponent } from './shopcars/shopcars.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ServiceProvidedComponent } from './components/service-provided/service-provided.component';
import { FeaturedItemsComponent } from './components/featured-items/featured-items.component';
import { BodyTypeComponent } from './components/body-type/body-type.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { BuyNowComponent } from './components/buy-now/buy-now.component';
import { SignupComponent } from './components/signup/signup.component';
import { FilterCarsComponent } from './shopcars/filter-cars/filter-cars.component';
import { CarListComponent } from './shopcars/car-list/car-list.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    ShopcarsComponent,
    HomeComponent,
    ServicesComponent,
    ContactComponent,
    CarouselComponent,
    ServiceProvidedComponent,
    FeaturedItemsComponent,
    BodyTypeComponent,
    NewsletterComponent,
    BrandsComponent,
    CarDetailComponent,
    BuyNowComponent,
    SignupComponent,
    FilterCarsComponent,
    CarListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    FormsModule, 
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
