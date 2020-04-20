import { CartService } from './../../services/cart.service';
import { Servicio, ServicioP } from './../../servicio';
import { ServiciosControllerService } from './../../services/servicios-controller.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-servicios-details',
  templateUrl: './servicios-details.page.html',
  styleUrls: ['./servicios-details.page.scss'],
})
export class ServiciosDetailsPage implements OnInit {
  servicio:Servicio;
  id:string;
  constructor(private activatedRoute: ActivatedRoute, private controller:ServiciosControllerService,private alertController: AlertController, private cartS:CartService) { }
  ionViewWillEnter(){
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getServicio();
  }
  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'this.servicio.Nombre',
      subHeader: 'Precio: ',
      message: 'this.servicio.Precio' + ' lps.',
      buttons: ['Cerrar']
    });
    await alert.present();
    //user cotizaciones += 1
  }
  getServicio() {
    this.controller.getDetails(this.id).then( (response) =>{
      this.servicio = response;
    }, (error) => {
      console.log("Error: " + error.statusText);
    })
  }

  add(){
    let producto:ServicioP = {
      "IDServicio":this.servicio.IDServicio,
      "Nombre":this.servicio.Nombre,
      "PrecioU":this.servicio.Precio,
      "Cantidad": 1,
      "PrecioT": this.servicio.Precio
    }
    this.cartS.addProduct(producto);
  }


}
