import { ServiciosControllerService } from './../../services/servicios-controller.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
})

export class ServiciosPage implements OnInit {
  servicios:Observable<any>;
  constructor(private controller:ServiciosControllerService) { 

  }

  ngOnInit() {
    this.servicios = this.controller.getServicios();
  }

}
