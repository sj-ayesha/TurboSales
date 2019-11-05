import {Injectable} from '@angular/core';
import {CarDetails} from '../_services/car.service';
import { ActivatedRoute } from '@angular/router';
import {BehaviorSubject, Observable, Subject, Subscriber} from 'rxjs';
import { Item } from '../_entities/item.entity';
import {of} from 'rxjs/observable/of';
import { BuyCarService } from '../_services/buy-car.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private itemsInCartSubject: BehaviorSubject<CarDetails[]> = new BehaviorSubject([]);
  private itemsInCart: CarDetails[] = [];

  constructor(private route: ActivatedRoute, private buyCarService: BuyCarService) {
    this.itemsInCartSubject.subscribe(_ => this.itemsInCart = _);
  }

  public addToCart(item: CarDetails) {
    this.itemsInCartSubject.next([...this.itemsInCart, item]);
  }

  public getItems(): Observable<CarDetails[]> {
    return this.itemsInCartSubject;
  }

  public removeFromCart(item: CarDetails) {
    const currentItems = [...this.itemsInCart];
    const itemsWithoutRemoved = currentItems.filter(_ => _.id !== item.id);
    this.itemsInCartSubject.next(itemsWithoutRemoved);
  }
}
