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
  medicos:Array<Medico>;
  medico:Medico;
  id:string;
  constructor(private activatedRoute: ActivatedRoute, private controller:CitasControllerService) { }
  ionViewWillEnter(){
    this.id = this.activatedRoute.snapshot.paramMap.get('doc');
    this.getMedico();
  }
  ngOnInit() {
  }
  getMedico() {
    this.controller.getMedicos(this.id).then( (response) =>{
      this.medicos = response;
      this.medico = this.medicos[0];
    }, (error) => {
      console.log("Error: " + error.statusText);
    })
  }

}
