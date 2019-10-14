import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopcarsComponent } from './shopcars/shopcars.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { SignupComponent } from './components/signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { AuthGuard } from './_helpers';


const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'shopcars', component: ShopcarsComponent },
  { path:'services', component: ServicesComponent },
  { path:'contact', component: ContactComponent },
  { path:'shopcars/:id', component: CarDetailComponent },
  { path:'signup', component: SignupComponent },
  { path: 'cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
