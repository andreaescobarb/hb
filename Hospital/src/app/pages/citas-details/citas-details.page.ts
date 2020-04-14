import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CitasControllerService } from 'src/app/services/citas-controller.service';
import { Medico } from 'src/app/servicio';

@Component({
  selector: 'app-citas-details',
  templateUrl: './citas-details.page.html',
  styleUrls: ['./citas-details.page.scss'],
})
export class CitasDetailsPage implements OnInit {
  id: string;
  medicos: Array<Medico>;
  details = "/menu/tabs/tabs/citas/";
  constructor(private activatedRoute: ActivatedRoute, private controller: CitasControllerService, private router: Router) { }
  ionViewWillEnter() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getMedicosE();
  }
  ngOnInit() {
  }
  filter(ev: any) {
    this.controller.getMedicos("-" + this.id).then((response) => {
      this.medicos = response;
      if (this.medicos != undefined) {
        const val: string = ev.target.value;
        if (val && val.trim() != '') {
          this.medicos = this.medicos.filter((item) => {
            return ((item.Nombre + " " + item.Apellido).toLowerCase().indexOf(val.toLowerCase()) > -1);
          });
        }
      }
    }, (error) => {
      console.log("Error: " + error.statusText);
    });
  }
  getMedicosE() {
    this.controller.getMedicos("-" + this.id).then((response) => {
      this.medicos = response;
    }, (error) => {
      console.log("Error: " + error.statusText);
    });
  }
  doRefresh(event) {
    this.controller.getMedicos("-" + this.id).then((response) => {
      this.medicos = response;
      event.target.complete();
    }, (error) => {
      console.log("Error: " + error.statusText);
      event.target.complete();
    });
  }
  detail(id) {
    let ruta = this.details + this.id + "/" + id;
    this.router.navigateByUrl(ruta);
  }

}
