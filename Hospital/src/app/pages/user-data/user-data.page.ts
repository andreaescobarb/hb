import { Router } from '@angular/router';
import { Paciente } from './../../servicio';
import { PacientesControllerService } from './../../services/pacientes-controller.service';
import { Component, OnInit } from '@angular/core';
import { usermail } from '../register/register.page';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.page.html',
  styleUrls: ['./user-data.page.scss'],
})
export class UserDataPage implements OnInit {
  paciente = {
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
  constructor(private controller: PacientesControllerService, private router:Router) { }

  ngOnInit() {
  }
  create() {
    if (this.paciente.Nombre!="" && this.paciente.Apellido!=""
    && this.paciente.Identidad!="" && this.paciente.Genero!=undefined
    && this.paciente.IDNacionalidad!=undefined) {
      this.paciente.IDUser = usermail;
      this.controller.create(this.paciente);
      this.router.navigate(['menu','tabs']);
    }
  }

}
