import { Component, OnInit } from '@angular/core';
import { PacientesControllerService } from 'src/app/services/pacientes-controller.service';
import { mail } from '../login/login.page';

@Component({
  selector: 'app-inscribir-otro',
  templateUrl: './inscribir-otro.page.html',
  styleUrls: ['./inscribir-otro.page.scss'],
})
export class InscribirOtroPage implements OnInit {

  paciente = {
    "IDPaciente": 0,
    "Nombre": "",
    "Apellido": "",
    "Apellido2": "",
    "Identidad": "",
    "IDNacionalidad": 0,
    "Edad": 0,
    "Genero": "",
    "CiudadResidencia": 0,
    "Residencia": 0,
    "IDUsers": ""
  };
  constructor(private controller: PacientesControllerService) { }

  ngOnInit() {
  }
  create() {
    if (this.paciente.Nombre!="" && this.paciente.Apellido!=""
    && this.paciente.Identidad!="" && this.paciente.Genero!=undefined
    && this.paciente.IDNacionalidad!=undefined) {
      this.paciente.IDUsers = mail;
      this.controller.create(this.paciente);
    }
  }

}
