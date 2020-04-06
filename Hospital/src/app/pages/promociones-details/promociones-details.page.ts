import { Promocion, ServiciosEnPromocion, Servicio } from './../../servicio';
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
  promocion: Promocion = null;
  paquete: ServiciosEnPromocion = null;
  servicios: Array<Servicio> = new Array<Servicio>();
  Ahorro: number = 0;
  constructor(private activatedRoute: ActivatedRoute, private controller: PromocionesControllerService, private controlador: ServiciosControllerService) { }
  id: string;
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getPromocion();
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

}
