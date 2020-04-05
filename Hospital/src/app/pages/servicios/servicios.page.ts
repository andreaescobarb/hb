import { ServiciosControllerService } from './../../services/servicios-controller.service';
import { Component, OnInit } from '@angular/core';
import { Servicio } from '../../servicio';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
})

export class ServiciosPage implements OnInit {
  servicios: Servicio;
  constructor(private controller: ServiciosControllerService) {
  }

  ngOnInit() {
    this.getLstServicios();
  }

  getLstServicios() {
    this.controller.getServicios().then( (response) =>{
      this.servicios = response;
    }, (error) => {
      alert("Error: " + error.statusText);
    })
  }
}

