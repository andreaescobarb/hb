import { Pacientes } from './../../servicio';
import { Component, OnInit } from '@angular/core';
import { PacientesControllerService } from 'src/app/services/pacientes-controller.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { JwtHelper } from 'src/app/helpers/jwthelper';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {
  pacientes: Array<Pacientes>;
  details = "/menu/cuenta/";
  constructor(private controller: PacientesControllerService, private router: Router, private usuario:AuthenticationService, private jwt:JwtHelper) { }
  ionViewWillEnter() {
    this.getLstPacientes();
  }
  ngOnInit() {
  }
  filter(ev: any) {
    this.controller.getPacientesU("-"+"id").then((response) => {
      this.pacientes = response;
      if (this.pacientes != undefined) {
        const val : string = ev.target.value;
        if (val && val.trim() != '') {
          this.pacientes = this.pacientes.filter((item) => {
            return (item.Nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
          });
        }
      }
    }, (error) => {
      console.log("Error: " + error.statusText);
    });
  }
  getLstPacientes(): any {
    this.controller.getPacientesU("-" + (this.jwt.decodeToken((this.usuario.currentUserValue as any).access_token).nameid)).then((response) => {
      this.pacientes = response;
    }, (error) => {
      console.log("Error: " + error.statusText);
    });
  }
  doRefresh(event) {
    this.controller.getPacientesU("-" + (this.jwt.decodeToken((this.usuario.currentUserValue as any).access_token).nameid)).then((response) => {
      this.pacientes = response;
      event.target.complete();
    }, (error) => {
      console.log("Error: " + error.statusText);
      event.target.complete();
    });
  }
  detail(id) {
    let ruta = this.details + id;
    this.router.navigateByUrl(ruta);
  }
}
