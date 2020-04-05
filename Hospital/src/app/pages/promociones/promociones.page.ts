import { Promocion } from './../../servicio';
import { Component, OnInit } from '@angular/core';
import { PromocionesControllerService } from 'src/app/services/promociones-controller.service';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.page.html',
  styleUrls: ['./promociones.page.scss'],
})
export class PromocionesPage implements OnInit {
  promociones:Promocion;
  constructor(private controller:PromocionesControllerService) { }
  
  ngOnInit() {
    this.getLstPromociones();
  }
  getLstPromociones() {
    this.controller.getPromociones().then( (response) =>{
      this.promociones = response;
    }, (error) => {
      alert("Error: " + error.statusText);
    })
  }

}
