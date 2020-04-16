import { CitasControllerService } from './../../services/citas-controller.service';
import { Component, OnInit } from '@angular/core';
import { Especialidad } from 'src/app/servicio';
import { Router } from '@angular/router';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.page.html',
  styleUrls: ['./citas.page.scss'],
})
export class CitasPage implements OnInit {
  especialidades:Array<Especialidad>;
  details = "/menu/tabs/tabs/citas/";
  constructor(private controller: CitasControllerService, private router: Router) { }
  ionViewWillEnter() {
    this.getLstEspecialidades();
  }
  ngOnInit() {
  }
  filter(ev: any) {
    this.controller.getEspecialidades().then((response) => {
      this.especialidades = response;
      if (this.especialidades != undefined) {
        const val : string = ev.target.value;
        if (val && val.trim() != '') {
          this.especialidades = this.especialidades.filter((item) => {
            return (item.Nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
          });
        }
      }
    }, (error) => {
      console.log("Error: " + error.statusText);
    });
  }
  getLstEspecialidades(): any {
    this.controller.getEspecialidades().then((response) => {
      this.especialidades = response;
    }, (error) => {
      console.log("Error: " + error.statusText);
    });
  }
  doRefresh(event) {
    this.controller.getEspecialidades().then((response) => {
      this.especialidades = response;
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
