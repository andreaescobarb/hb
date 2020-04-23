import { JwtHelper } from './../../helpers/jwthelper';
import { Component, OnInit } from '@angular/core';
import { PacientesControllerService } from 'src/app/services/pacientes-controller.service';
import { Router } from '@angular/router';
import { Nacionalidad, Ciudad, Residencia, User, Usuario } from 'src/app/servicio';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-inscribir-otro',
  templateUrl: './inscribir-otro.page.html',
  styleUrls: ['./inscribir-otro.page.scss'],
})
export class InscribirOtroPage implements OnInit {
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
    "IDNacionalidad": 0,
    "Ciudad": 0,
    "Residencia": 0,
    "IDUser": ""
  };
  constructor(private controller: PacientesControllerService, private router: Router, private usuario:AuthenticationService, private jwt: JwtHelper) { }
  ionViewWillEnter() {
    this.getLstNacionalidades();
    this.getLstCiudades();
    this.getLstResidencias(1);
  }
  ngOnInit() {
  }
  //Este
  create() {
    if (this.paciente.Nombre != "" && this.paciente.Apellido != ""
      && this.paciente.Identidad != "" && this.paciente.Genero != undefined
      && this.paciente.IDNacionalidad != undefined) {
      //this.router.navigate(['menu', 'tabs']);
      this.paciente.IDUser = this.jwt.decodeToken((this.usuario.currentUserValue as any).access_token).nameid;
      this.controller.create(this.paciente);
      this.router.navigate(['menu', 'tabs']);
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
