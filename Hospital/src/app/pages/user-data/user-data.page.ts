import { Paciente } from './../../servicio';
import { PacientesControllerService } from './../../services/pacientes-controller.service';
import { Component, OnInit } from '@angular/core';
import { mail } from '../login/login.page';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.page.html',
  styleUrls: ['./user-data.page.scss'],
})
export class UserDataPage implements OnInit {
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
