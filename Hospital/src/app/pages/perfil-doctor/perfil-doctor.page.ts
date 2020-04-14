import { Component, OnInit } from '@angular/core';
import { Medico } from 'src/app/servicio';
import { CitasControllerService } from 'src/app/services/citas-controller.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil-doctor',
  templateUrl: './perfil-doctor.page.html',
  styleUrls: ['./perfil-doctor.page.scss'],
})
export class PerfilDoctorPage implements OnInit {
  medicos: Array<Medico>;
  medico: Medico;
  id: string;
  date: Date = new Date();
  date0: Date = new Date();
  minDate: string = "";
  maxDate: string = "";
  n_disponibles:string = '';
  constructor(private activatedRoute: ActivatedRoute, private controller: CitasControllerService) { }
  ionViewWillEnter() {
    this.id = this.activatedRoute.snapshot.paramMap.get('doc');
    this.date = new Date();
    this.date0 = new Date();
    this.date0.setMonth(this.date.getMonth() + 3);
    this.minDate = "";
    this.maxDate = "";
    if (this.date.getMonth() + 1 < 10) {
      this.minDate += this.date.getFullYear() + "-" + "0" + (this.date.getMonth() + 1) + "-" + this.date.getDate();
    } else {
      this.minDate += this.date.getFullYear() + "-" + (this.date.getMonth() + 1) + "-" + this.date.getDate();
    }
    if (this.date0.getMonth() + 1 < 10) {
      this.maxDate += this.date0.getFullYear() + "-" + "0" + (this.date0.getMonth() + 1) + "-" + this.date0.getDate();
    } else {
      this.maxDate += this.date0.getFullYear() + "-" + (this.date0.getMonth() + 1) + "-" + this.date0.getDate();
    }

    this.getMedico();
  }
  ngOnInit() {
  }
  getMedico() {
    this.controller.getMedicos(this.id).then((response) => {
      this.medicos = response;
      this.medico = this.medicos[0];
    }, (error) => {
      console.log("Error: " + error.statusText);
    })
  }

}
