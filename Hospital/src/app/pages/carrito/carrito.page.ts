import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ServicioP, PromocionP, ServiciosEnPromocion, Servicio } from 'src/app/servicio';
import { ServiciosControllerService } from 'src/app/services/servicios-controller.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  carrito;
  servicios: Array<Servicio> = new Array<Servicio>();
  constructor(private cartS: CartService, private controlador:ServiciosControllerService) { }
  ionViewWillEnter() {
    this.carrito = this.cartS.getCart();
  }
  ngOnInit() {
  }
  type(product: ServicioP | PromocionP): product is ServicioP {
    if ((product as ServicioP).IDServicio) {
      return true;
    } else
      return false;
  }
  addProduct(product) {
    this.cartS.addProduct(product);
  }
  removeProduct(product) {
    this.cartS.removeProduct(product);
  }
}
