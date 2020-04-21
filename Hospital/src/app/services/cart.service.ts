import { BehaviorSubject } from 'rxjs';
import { ServicioP, PromocionP } from './../servicio';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Array<ServicioP | PromocionP> = new Array<ServicioP | PromocionP>();
  private cartItemCount = new BehaviorSubject(0);
  constructor() { }
  getCart() {
    return this.cart;
  }

  getCartItemCount() {
    return this.cartItemCount;
  }

  type(product: ServicioP | PromocionP): product is ServicioP {
    if ((product as ServicioP).IDServicio) {
      return true;
    } else
      return false;
  }

  addProduct(product: ServicioP | PromocionP) {
    var flag = false;
    if (this.cart.length > 0) {
      for (let data of this.cart) {
        if (this.type(product)) {
          if ((data as ServicioP).IDServicio == product.IDServicio) {
            data.Cantidad += 1;
            data.PrecioT = data.Cantidad * data.PrecioU;
            flag = true;
          }
        } else {
          if ((data as PromocionP).IDPromocion == product.IDPromocion) {
            data.Cantidad += 1;
            data.PrecioT = data.Cantidad * data.PrecioU;
            flag = true;
          }
        }
      }
    }
    if (!flag) {
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

  removeProduct(product: ServicioP | PromocionP) {
    var flag = false;
    for (let data of this.cart) {
      if (this.type(product)) {
        if ((data as ServicioP).IDServicio == product.IDServicio) {
          if (data.Cantidad > 1) {
            data.Cantidad -= 1;
            data.PrecioT = data.Cantidad * data.PrecioU;
          } else {
            this.cart.splice(this.cart.indexOf(data), 1);
          }
        }
      } else {
        if ((data as PromocionP).IDPromocion == product.IDPromocion) {
          if (data.Cantidad > 1) {
            data.Cantidad -= 1;
            data.PrecioT = data.Cantidad * data.PrecioU;
          } else {
            this.cart.splice(this.cart.indexOf(data), 1);
          }
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }
}
