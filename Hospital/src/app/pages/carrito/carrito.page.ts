import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ServicioP, PromocionP } from 'src/app/servicio';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  carrito;
  constructor(private cartS:CartService) { }
  ionViewWillEnter(){
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

}
