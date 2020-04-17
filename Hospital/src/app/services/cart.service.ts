import { BehaviorSubject } from 'rxjs';
import { Servicio, Promocion } from './../servicio';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart : Array<Servicio | Promocion>;
  private cartItemCount = new BehaviorSubject(0);
  constructor() { }
  getCart(){
    return this.cart;
  }
  
  getCartItemCount(){
    return this.cartItemCount;
  }
  
  addProduct(product:Servicio | Promocion){

  }

  removeProduct(product:Servicio | Promocion){
    
  }
}
