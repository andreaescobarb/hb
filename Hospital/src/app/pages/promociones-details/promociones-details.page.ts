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
  promocion:Promocion;
  paquete:ServiciosEnPromocion;
  servicios:Servicio;
  //servicios:ServiciosEnPromocion;
  constructor(private activatedRoute: ActivatedRoute, private controller:PromocionesControllerService, private controlador:ServiciosControllerService) { }
  id:string;
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getPromocion();
    this.getServiciosEnPromo();
    this.getServicios();
  }
  getPromocion() {
    this.controller.getDetails(this.id).then( (response) =>{
      this.promocion = response;
    }, (error) => {
      console.log("Error: " + error.statusText);
    })
  }
  getServiciosEnPromo(){
    this.controller.getPaquete(this.id).then( (response) =>{
      this.paquete = response;
    }, (error) => {
      console.log("Error: " + error.statusText);
    })
  }
  getServicios(){
    this.controlador.getDetails(this.paquete.IDServicio).then( (response) =>{
      this.servicios = response;
    }, (error) => {
      console.log("Error: " + error.statusText);
    })
  }

}
