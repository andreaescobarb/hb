import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Servicio } from '../servicio';



@Injectable({
  providedIn: 'root'
})
export class ServiciosControllerService {
  url = 'https://localhost:44380//api/servicio';

  constructor(private http:HttpClient) { 
  }
  getServicios = (): Promise<Array<Servicio>> => {
    let promise = new Promise<Array<Servicio>>((resolve, reject) => {
        this.http.get(this.url)
        .toPromise()
        .then( (response) => {
          resolve(response as Array<Servicio>);
        }, (error) => {
          reject(error);
        })
    })
    return promise;
  }
  getDetails = (id): Promise<Servicio> => {
    let urll = this.url + '/' + id;
    let promise = new Promise<Servicio>((resolve, reject) => {
      this.http.get(urll)
      .toPromise()
      .then( (response) => {
        resolve(response as Servicio);
      }, (error) => {
        reject(error);
      })
  })
  return promise;
  }
}
