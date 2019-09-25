import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopcarsComponent } from './shopcars/shopcars.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'shopcars', component: ShopcarsComponent },
  { path:'services', component: ServicesComponent },
  { path:'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
