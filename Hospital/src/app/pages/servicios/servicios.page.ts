import { Router } from '@angular/router';
import { ServiciosControllerService } from './../../services/servicios-controller.service';
import { Component, OnInit } from '@angular/core';
import { Servicio } from '../../servicio';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
})
export class ServiciosPage implements OnInit {
  servicios: Array<Servicio>;
  details = "/menu/tabs/tabs/servicios/";
  constructor(private controller: ServiciosControllerService, private router: Router) { }
  ionViewWillEnter() {
    this.getLstServicios();
  }
  ngOnInit() {
  }
  filter(ev: any) {
    this.controller.getServicios().then((response) => {
      this.servicios = response;
      if (this.servicios != undefined) {
        const val : string = ev.target.value;
        if (val && val.trim() != '') {
          this.servicios = this.servicios.filter((item) => {
            return (item.Nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
          });
        }
      }
    }, (error) => {
      console.log("Error: " + error.statusText);
    });
  }
  getLstServicios(): any {
    this.controller.getServicios().then((response) => {
      this.servicios = response;
    }, (error) => {
      console.log("Error: " + error.statusText);
    });
  }
  doRefresh(event) {
    this.controller.getServicios().then((response) => {
      this.servicios = response;
      event.target.complete();
    }, (error) => {
      console.log("Error: " + error.statusText);
      event.target.complete();
    });
  }
  detail(id) {
    let ruta = this.details + id;
    this.router.navigateByUrl(ruta);
  }

}

