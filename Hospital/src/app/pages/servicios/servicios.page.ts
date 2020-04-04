import { ServiciosControllerService, Servicios } from './../../services/servicios-controller.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
})

export class ServiciosPage implements OnInit {
  servicios: Observable<any>;
  lstServicios = Array<Servicios>()
  constructor(private controller: ServiciosControllerService) {
  }

  ngOnInit() {
    this.getLstServicios();
  }

  getLstServicios() {
     this.controller.getServicios().subscribe(
      (data: [any]) => {
        if (data != null) {
          if (data[0].CodigoRespuesta == 1) {
            this.lstServicios = Array<Servicios>();
            data[0].Data.forEach(servicio => {
              this.lstServicios.push(new Servicios(servicio.IdServicio, servicio.nombreServicio, servicio.precio, servicio.recomendaciones))
            });
          }
          else {
          }
        }
      },
      (error) => {

      });
  }
}

