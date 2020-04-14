import { Component, OnInit } from '@angular/core';
import { PacientesControllerService } from 'src/app/services/pacientes-controller.service';
import { mail } from '../login/login.page';
import { Router } from '@angular/router';
import { usermail } from '../register/register.page';
import { Nacionalidad, Ciudad, Residencia, User } from 'src/app/servicio';
import { UserControllerService } from 'src/app/services/user-controller.service';

@Component({
  selector: 'app-inscribir-otro',
  templateUrl: './inscribir-otro.page.html',
  styleUrls: ['./inscribir-otro.page.scss'],
})
export class InscribirOtroPage implements OnInit {
  Nacionalidades: Nacionalidad;
  Ciudades: Ciudad;
  Residencias: Residencia;
  temporal:User;
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
  constructor(private controller: PacientesControllerService, private router: Router, private controllerUser: UserControllerService) { }
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
      this.router.navigate(['menu', 'tabs']);
      this.controllerUser.getUsers().then((response) => {
        this.temporal = response;
        var flag = true;
        for (let data of ((this.temporal as unknown) as Iterable<User>)) {
          if (data.Correo == usermail) {
            this.paciente.IDUser = data.Correo;
            this.controller.create(this.paciente);
            this.router.navigate(['menu', 'tabs']);
          }
        }
        //console.log('Correo o contraseña incorrectos');
      }, (error) => {
        console.log("Error: " + error.statusText);
      });
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
