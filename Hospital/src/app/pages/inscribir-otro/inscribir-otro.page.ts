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
    "SegundoApellido": "",
    "Identidad": "",
    "Edad": 0,
    "Genero": "",
    "IDNacionalidad": 0,
    "Ciudad": 0,
    "Residencia": 0,
    "IDUser": ""
  };
  constructor(private controller: PacientesControllerService) { }

  ngOnInit() {
  }
  create() {
    if (this.paciente.Nombre!="" && this.paciente.Apellido!=""
    && this.paciente.Identidad!="" && this.paciente.Genero!=undefined
    && this.paciente.IDNacionalidad!=undefined) {
      this.paciente.IDUser = mail;
      this.controller.create(this.paciente);
    }
  }

}
