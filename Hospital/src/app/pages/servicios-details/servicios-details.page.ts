import { Servicio } from './../../servicio';
import { ServiciosControllerService } from './../../services/servicios-controller.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servicios-details',
  templateUrl: './servicios-details.page.html',
  styleUrls: ['./servicios-details.page.scss'],
})
export class ServiciosDetailsPage implements OnInit {
  servicio:Servicio;
  constructor(private activatedRoute: ActivatedRoute, private controller:ServiciosControllerService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
