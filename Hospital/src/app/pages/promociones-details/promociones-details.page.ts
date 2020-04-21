import { CartService } from './../../services/cart.service';
import { AlertController } from '@ionic/angular';
import { Promocion, ServiciosEnPromocion, Servicio, PromocionP } from './../../servicio';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PromocionesControllerService } from 'src/app/services/promociones-controller.service';
import { ServiciosControllerService } from 'src/app/services/servicios-controller.service';

@Component({
  selector: 'app-promociones-details',
  templateUrl: './promociones-details.page.html',
  styleUrls: ['./promociones-details.page.scss'],
})
export class PromocionesDetailsPage implements OnInit {
  promocion: Promocion;
  paquete: ServiciosEnPromocion;
  servicios: Array<Servicio> = new Array<Servicio>();
  id: string;
  Ahorro: number = 0;
  constructor(private activatedRoute: ActivatedRoute, private controller: PromocionesControllerService, private controlador: ServiciosControllerService, private alertController:AlertController, private cartS:CartService) { }
  ionViewWillEnter(){
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.Ahorro = 0;
    
    this.getPromocion();
  }
  ngOnInit() {
  }
  async presentAlert() {
    var precio:number = 0.0;
    for(let data of ((this.paquete as unknown) as Iterable<ServiciosEnPromocion>)){
      precio += data.PrecioFinal;
    }
    const alert = await this.alertController.create({
      header: 'this.promocion.Nombre',
      subHeader: 'Precio: ',
      message: precio + ' lps.' + 'Ahorro: ' + this.Ahorro + ' lps.',
      buttons: ['Cerrar']
    });
    await alert.present();
    //user cotizaciones += 1
  }
  getPromocion() {
    this.controller.getDetails(this.id).then((response) => {
      this.promocion = response;
      this.getServiciosEnPromo();
    }, (error) => {
      console.log("Error: " + error.statusText);
    })
  }
  getServiciosEnPromo() {
    this.controller.getPaquete(this.id).then((response) => {
      this.paquete = response;
      this.getServicios();
    }, (error) => {
      console.log("Error: " + error.statusText);
    })
  }
  getServicios() {
    for (let data of ((this.paquete as unknown) as Iterable<ServiciosEnPromocion>)) {
      this.controlador.getDetails(data.IDServicio).then((response) => {
        this.servicios.push(response);
        this.getAhorro();
      }, (error) => {
        console.log("Error: " + error.statusText);
      })
    }
  }
  getAhorro() {
    for (let data of this.servicios) {
      this.Ahorro += data.Precio;
    }
    for (let data of ((this.paquete as unknown) as Iterable<ServiciosEnPromocion>)) {
      this.Ahorro -= data.PrecioFinal;
    }
  }

  add(){
    var precio:number = 0.0;
    for(let data of ((this.paquete as unknown) as Iterable<ServiciosEnPromocion>)){
      precio += data.PrecioFinal;
    }
    let producto:PromocionP = {
      "IDPromocion":this.promocion.IDPromocion,
      "Nombre":this.promocion.Nombre,
      "Detalle":this.promocion.Detalle,
      "Servicios": ((this.paquete as unknown) as Array<ServiciosEnPromocion>),
      "Servicio": this.servicios,
      "FechaExpiracion":this.promocion.FechaExpiracion,
      "Cantidad": 1,
      "PrecioU": precio,
      "PrecioT": precio 
    }
    this.cartS.addProduct(producto);
  }

}
