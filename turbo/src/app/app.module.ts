import { NgModule } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import 'hammerjs';
import { NgxGalleryModule } from 'ngx-gallery';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CountUpModule } from 'countup.js-angular2';
import {NgsRevealModule} from 'ngx-scrollreveal';
import { NgxPaginationModule } from 'ngx-pagination';

import { SocialLoginModule, AuthServiceConfig, FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';

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
import { PopupComponent } from './components/popup/popup.component';
import { SignupComponent } from './components/signup/signup.component';
import { FilterCarsComponent } from './shopcars/filter-cars/filter-cars.component';
import { CarListComponent } from './shopcars/car-list/car-list.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './cart/cart.component';
import { CounterUpComponent } from './components/counter-up/counter-up.component';
import { CarFinancingComponent } from './components/car-financing/car-financing.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { ExpertsComponent } from './components/experts/experts.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

const config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('1619964158145672')
  },
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("546819386700-kpkvsuoovke2dsj2olc1jlq7tier6sq3.apps.googleusercontent.com")
  }
]);

export function provideConfig() {
  return config;
}

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
    PopupComponent,
    SignupComponent,
    FilterCarsComponent,
    CarListComponent,
    LoginComponent,
    CartComponent,
    CounterUpComponent,
    CarFinancingComponent,
    AppointmentComponent,
    ExpertsComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    FormsModule, 
    BrowserAnimationsModule,
    NgxGalleryModule,
    ReactiveFormsModule,
    HttpClientModule,
    CountUpModule,
    NgsRevealModule,
    NgxPaginationModule,
    SocialLoginModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },  
    { provide: AuthServiceConfig, useFactory: provideConfig },      
    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
