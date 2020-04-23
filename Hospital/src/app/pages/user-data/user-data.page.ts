import { JwtHelper } from './../../helpers/jwthelper';
import { Router } from '@angular/router';
import { Paciente, Nacionalidad, Residencia, Ciudad, Usuario } from './../../servicio';
import { PacientesControllerService } from './../../services/pacientes-controller.service';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { nameid } from '../register/register.page';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.page.html',
  styleUrls: ['./user-data.page.scss'],
})
export class UserDataPage implements OnInit {
  Nacionalidades: Nacionalidad;
  Ciudades: Ciudad;
  Residencias: Residencia;
  temporal: Usuario;
  paciente = {
    "Nombre": "",
    "Apellido": "",
    "SegundoApellido": "",
    "Identidad": "",
    "Edad": 0,
    "Genero": "",
    "IDNacionalidad": 1,
    "Ciudad": 0,
    "Residencia": 0,
    "IDUser": ""
  };
  constructor(private controller: PacientesControllerService, private router: Router, private usuario: AuthenticationService, private jwt: JwtHelper) { }
  ionViewWillEnter() {
    this.getLstNacionalidades();
    this.getLstCiudades();
    this.getLstResidencias(1);
  }
  ngOnInit() {
  }

  create() {
    if (this.paciente.Nombre != "" && this.paciente.Apellido != ""
      && this.paciente.Identidad != "" && this.paciente.Genero != undefined
      && this.paciente.IDNacionalidad != undefined) {
        console.log(nameid);
      this.paciente.IDUser = nameid;
      this.controller.create(this.paciente);
      this.router.navigate(['login']);
    }
  }
  getLstNacionalidades() {
    this.controller.getNacionalidades().then((response) => {
      this.Nacionalidades = response;
    }, (error) => {
      console.log("Error: " + error.statusText);
    })
  }
  getLstCiudades() {
    this.controller.getCiudades().then((response) => {
      this.Ciudades = response;
    }, (error) => {
      console.log("Error: " + error.statusText);
    })
  }
  getLstResidencias(id) {
    this.controller.getResidencias(id).then((response) => {
      this.Residencias = response;
    }, (error) => {
      console.log("Error: " + error.statusText);
    })
  }
  onChange() {
    this.getLstResidencias(this.paciente.Ciudad);
  }
}
