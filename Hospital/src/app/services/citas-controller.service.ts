import { Especialidad, Medico } from './../servicio';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CitasControllerService {
  url = 'https://localhost:44380//api/especialidades';
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
  getMedicos = (id): Promise<Array<Medico>> => {
    let promise = new Promise<Array<Medico>>((resolve, reject) => {
      this.http.get('https://localhost:44380//api/medicos/' + id)
        .toPromise()
        .then((response) => {
          resolve(response as Array<Medico>);
        }, (error) => {
          reject(error);
        })
    })
    return promise;
  }
  getMedico = (id): Promise<Medico> => {
    let promise = new Promise<Medico>((resolve, reject) => {
      this.http.get('https://localhost:44380//api/medicos/' + id)
        .toPromise()
        .then((response) => {
          resolve(response as Medico);
        }, (error) => {
          reject(error);
        })
    })
    return promise;
  }
}
