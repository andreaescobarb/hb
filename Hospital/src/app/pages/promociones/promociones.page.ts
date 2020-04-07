import { Router } from '@angular/router';
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
  details = "/menu/tabs/tabs/promociones/";
  constructor(private controller:PromocionesControllerService, private router:Router) { }
  ionViewWillEnter(){
    this.getLstPromociones();
  }
  ngOnInit() {
  }
  getLstPromociones() {
    this.controller.getPromociones().then( (response) =>{
      this.promociones = response;
    }, (error) => {
      console.log("Error: " + error.statusText);
    })
  }
  doRefresh(event) {
    this.controller.getPromociones().then( (response) =>{
      this.promociones = response;
      event.target.complete();
    }, (error) => {
      console.log("Error: " + error.statusText);
      event.target.complete();
    });
  }
  detail(id){
    let ruta = this.details + id;
    this.router.navigateByUrl(ruta);
  }

}
