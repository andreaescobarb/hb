import { Pacientes } from './../servicio';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Paciente, Nacionalidad, Residencia, Ciudad } from '../servicio';

@Injectable({
  providedIn: 'root'
})
export class PacientesControllerService {
  url = 'https://localhost:44380/api/Pacientes';
  constructor(private http: HttpClient) { }
  create(paciente) {
    const httpOptions = { headers: new HttpHeaders({ 'Accept': 'application/json', 'Content-Type': 'application/json'}) }; 
    console.log(JSON.stringify(paciente)); 
    this.http.post(this.url,JSON.stringify(paciente),httpOptions)
    .toPromise()
    .then( (response) => {
      console.log(response)
    }, (error)=> {
      console.log(error.status)
    });
  }

  getPacientes = (id): Promise<Array<Paciente>> => {
    let promise = new Promise<Array<Paciente>>((resolve, reject) => {
      this.http.get('https://localhost:44380/api/Pacientes/'+id)
        .toPromise()
        .then((response) => {
          resolve(response as Array<Paciente>);
        }, (error) => {
          reject(error);
        })
    })
    return promise;
  }

  getPacientesU = (id): Promise<Array<Pacientes>> => {
    let promise = new Promise<Array<Pacientes>>((resolve, reject) => {
      this.http.get('https://localhost:44380/api/Pacientes/'+id)
        .toPromise()
        .then((response) => {
          resolve(response as Array<Pacientes>);
        }, (error) => {
          reject(error);
        })
    })
    return promise;
  }

  getNacionalidades = (): Promise<Nacionalidad> => {
    let promise = new Promise<Nacionalidad>((resolve, reject) => {
      this.http.get('https://localhost:44380/api/Nacionalidades')
        .toPromise()
        .then((response) => {
          resolve(response as Nacionalidad);
        }, (error) => {
          reject(error);
        })
    })
    return promise;
  }
  getCiudades = (): Promise<Ciudad> => {
    let promise = new Promise<Ciudad>((resolve, reject) => {
      this.http.get('https://localhost:44380/api/Ciudades')
        .toPromise()
        .then((response) => {
          resolve(response as Ciudad);
        }, (error) => {
          reject(error);
        })
    })
    return promise;
  }
  getResidencias = (id): Promise<Residencia> => {
    let promise = new Promise<Residencia>((resolve, reject) => {
      this.http.get('https://localhost:44380/api/Residencias/'+id)
        .toPromise()
        .then((response) => {
          resolve(response as Residencia);
        }, (error) => {
          reject(error);
        })
    })
    return promise;
  }
}
