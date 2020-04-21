import { Especialidad, Medico, Cita } from './../servicio';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CitasControllerService {
  //Especialidades
  url = 'https://localhost:44380/api/especialidades';
  constructor(private http: HttpClient) { }
  getEspecialidades = (): Promise<Array<Especialidad>> => {
    let promise = new Promise<Array<Especialidad>>((resolve, reject) => {
      this.http.get(this.url)
        .toPromise()
        .then((response) => {
          resolve(response as Array<Especialidad>);
        }, (error) => {
          reject(error);
        })
    })
    return promise;
  }
  //Determinada Especialidad
  getDetails = (id): Promise<Especialidad> => {
    let urll = this.url + '/' + id;
    let promise = new Promise<Especialidad>((resolve, reject) => {
      this.http.get(urll)
        .toPromise()
        .then((response) => {
          resolve(response as Especialidad);
        }, (error) => {
          reject(error);
        })
    })
    return promise;
  }

  //Medicos de Determinada Especialidad
  getMedicos = (id): Promise<Array<Medico>> => {
    let promise = new Promise<Array<Medico>>((resolve, reject) => {
      this.http.get('https://localhost:44380/api/especialidades/' + id)
        .toPromise()
        .then((response) => {
          resolve(response as Array<Medico>);
        }, (error) => {
          reject(error);
        })
    })
    return promise;
  }
  //Médico Específico
  getMedico = (id): Promise<Array<Medico>> => {
    let promise = new Promise<Array<Medico>>((resolve, reject) => {
      this.http.get('https://localhost:44380/api/medicos/' + id)
        .toPromise()
        .then((response) => {
          resolve(response as Array<Medico>);
        }, (error) => {
          reject(error);
        })
    })
    return promise;
  }
 

  //Citas de un Médico Específico
  getCitas = (id): Promise<Array<Cita>> => {
    let promise = new Promise<Array<Cita>>((resolve, reject) => {
      this.http.get('https://localhost:44380/api/medicos/' + id)
        .toPromise()
        .then((response) => {
          resolve(response as Array<Cita>);
        }, (error) => {
          reject(error);
        })
    })
    return promise;
  }
  //Citas de Determinado Paciente
  getCitasU = (id): Promise<Array<Cita>> => {
    let promise = new Promise<Array<Cita>>((resolve, reject) => {
      this.http.get('https://localhost:44380/api/citas/' + id)
        .toPromise()
        .then((response) => {
          resolve(response as Array<Cita>);
        }, (error) => {
          reject(error);
        })
    })
    return promise;
  }
  //Hacer una Cita
  create(cita) {
    console.log('entro2');
    const httpOptions = { headers: new HttpHeaders({ 'Accept': 'application/json', 'Content-Type': 'application/json'}) }; 
    console.log(JSON.stringify(cita)); 
    this.http.post('https://localhost:44380/api/citas',JSON.stringify(cita),httpOptions)
    .toPromise()
    .then( (response) => {
      console.log(response)
    }, (error)=> {
      console.log(error.status)
    });
  }
}
