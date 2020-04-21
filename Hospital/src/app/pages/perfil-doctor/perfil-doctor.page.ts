import { JwtHelper } from './../../helpers/jwthelper';
import { PacientesControllerService } from 'src/app/services/pacientes-controller.service';
import { Component, OnInit } from '@angular/core';
import { Medico, Cita, Paciente } from 'src/app/servicio';
import { CitasControllerService } from 'src/app/services/citas-controller.service';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-perfil-doctor',
  templateUrl: './perfil-doctor.page.html',
  styleUrls: ['./perfil-doctor.page.scss'],
})
export class PerfilDoctorPage implements OnInit {
  //Medico
  id: string;//Id Medico
  medicos: Array<Medico>;
  medico: Medico;
  citas: Array<Cita>;
  //DateTime Fecha
  date: Date;
  date0: Date;
  minDate: string = "";
  maxDate: string = "";
  //DateTime Horas
  deshabilitar: boolean = true;
  n_disponibles: Array<string> = [];//Horas no disponibles para tal fecha
  fecha: string;
  fecha_cita: Date;
  hora_start: string;
  hora_finish: string;
  hora_cita: string;
  //Cita
  pacientes: Array<Paciente>;
  IDPaciente: number;

  constructor(private activatedRoute: ActivatedRoute, private controller: CitasControllerService, private controlador: PacientesControllerService, private usuario:AuthenticationService, private jwt:JwtHelper) { }
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
    this.getCitas();
    this.getPacientes();
  }
  ngOnInit() {
  }
  getMedico() {
    this.controller.getMedico(this.id).then((response) => {
      this.medicos = response;
      this.medico = this.medicos[0];
    }, (error) => {
      console.log("Error: " + error.statusText);
    })
  }

  getCitas() {
    this.controller.getCitas(("-" + this.id)).then((response) => {
      this.citas = response;
      for (let cita of this.citas) {
        if (this.fecha != "") {
          if(cita.Fecha == this.fecha){
            this.n_disponibles.push(cita.Hora);
          }
        }else{
          this.n_disponibles.push(cita.Hora);
        }
      }
    }, (error) => {
      console.log("Error: " + error.statusText);
    })
  }

  getPacientes() {
    this.controlador.getPacientesU("-" + (this.jwt.decodeToken((this.usuario.currentUserValue as any).access_token).nameid)).then((response) => {
      this.pacientes = response;
      console.log("-" + (this.jwt.decodeToken((this.usuario.currentUserValue as any).access_token).nameid));
    }, (error) => {
      console.log("Error: " + error.statusText);
    })
  }

  horas() {
    this.getCitas();
    this.fecha_cita = new Date(this.fecha.substr(0, 10));
    console.log((this.fecha_cita.getDate() + 1).toString());
    switch (this.fecha_cita.getDay() + 1) {
      case 1:
        this.deshabilitar = false;
        if (this.medico.Lunes != "") {
          console.log('Lunes');
          this.hora_start = (this.medico.Lunes as string).substr(0, 5);
          this.hora_finish = (this.medico.Lunes as string).substr(8, 5);
          break;
        } else {
          this.deshabilitar = true;
        }
      case 2:
        this.deshabilitar = false;
        if (this.medico.Martes != "") {
          console.log('Martes');
          this.hora_start = (this.medico.Martes as string).substr(0, 5);
          this.hora_finish = (this.medico.Martes as string).substr(8, 5);
          break;
        } else {
          this.deshabilitar = true;
        }
      case 3:
        this.deshabilitar = false;
        if (this.medico.Miercoles != "") {
          console.log('Miercoles');
          this.hora_start = (this.medico.Miercoles as string).substr(0, 5);
          this.hora_finish = (this.medico.Miercoles as string).substr(8, 5);
          break;
        } else {
          this.deshabilitar = true;
        }
      case 4:
        this.deshabilitar = false;
        if (this.medico.Jueves != "") {
          console.log('Jueves');
          this.hora_start = (this.medico.Jueves as string).substr(0, 5);
          this.hora_finish = (this.medico.Jueves as string).substr(8, 5);
          break;
        } else {
          this.deshabilitar = true;
        }
      case 5:
        this.deshabilitar = false;
        if (this.medico.Viernes != "") {
          console.log('Viernes');
          this.hora_start = (this.medico.Viernes as string).substr(0, 5);
          this.hora_finish = (this.medico.Viernes as string).substr(8, 5);
          break;
        } else {
          this.deshabilitar = true;
        }
      case 6:
        this.deshabilitar = false;
        if (this.medico.Sabado != "") {
          console.log('Sabado');
          this.hora_start = (this.medico.Sabado as string).substr(0, 5);
          this.hora_finish = (this.medico.Sabado as string).substr(8, 5);
          break;
        } else {
          this.deshabilitar = true;
        }
      default:
        this.deshabilitar = true;
    }
    console.log(this.hora_start + " " + this.hora_finish);
  }
  ordenLlegada() {
    //crearCita
    let cita = {
      "Fecha": this.fecha_cita,
      "Estado": 1,
      "Hora": "",
      "IDMedico": this.medico.IDMedico,
      "IDPaciente": this.IDPaciente
    }
    this.controller.create(cita);
  }
  agendar() {
    this.hora_cita = this.hora_cita.substr(11, 5);
    //if (!this.n_disponibles.indexOf(this.hora_cita)) {
      //Crear Cita
      let cita = {
        "Fecha": this.fecha_cita,
        "Estado": 1,
        "Hora": this.hora_cita,
        "IDMedico": this.medico.IDMedico,
        "IDPaciente": this.IDPaciente
      }
      console.log('entro1');
      this.controller.create(cita);
    //} else {
      //Hora No Disponible
    //}
  }

}
