import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paciente, Nacionalidad, Residencia, Ciudad } from '../servicio';

@Injectable({
  providedIn: 'root'
})
export class PacientesControllerService {
  url = 'https://localhost:44380/api/Pacientes';
  constructor(private http: HttpClient) { }
  create(paciente: Paciente) {
    this.http.post(this.url, JSON.stringify(paciente));
  };

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
