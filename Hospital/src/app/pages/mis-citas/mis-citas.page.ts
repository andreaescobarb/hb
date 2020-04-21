import { CitasControllerService } from 'src/app/services/citas-controller.service';
import { Cita, Medico } from './../../servicio';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mis-citas',
  templateUrl: './mis-citas.page.html',
  styleUrls: ['./mis-citas.page.scss'],
})
export class MisCitasPage implements OnInit {
  citas : Array<Cita>;
  medicos : Array<Medico> = new Array<Medico>();
  id:string;
  constructor(private controller:CitasControllerService, private activatedRoute: ActivatedRoute) { }
  ionViewWillEnter(){
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getCitas();
  }
  ngOnInit() {
  }
  getCitas(){
    this.controller.getCitasU(("-"+this.id)).then((response) => {
      this.citas = response;
      for (let cita of this.citas) {
        this.controller.getMedico(cita.IDMedico).then((response) => {
          this.medicos.push((response[0]) as Medico);
        }, (error) => {
          console.log("Error: " + error.statusText);
        })
      }
    }, (error) => {
      console.log("Error: " + error.statusText);
    })
  }
}
