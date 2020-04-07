import { Promocion, ServiciosEnPromocion } from './../servicio';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PromocionesControllerService {
  url = 'https://localhost:44380/api/Promociones';
  constructor(private http:HttpClient) { 
  }

  getPromociones = (): Promise<Promocion> =>{
    let promise = new Promise<Promocion>((resolve, reject) => {
      this.http.get(this.url)
      .toPromise()
      .then( (response) => {
        resolve(response as Promocion);
      }, (error) => {
        reject(error);
      })
  })
  return promise;
  }
  getDetails = (id): Promise<Promocion> => {
    let urll = this.url + '/' + id;
    let promise = new Promise<Promocion>((resolve, reject) => {
      this.http.get(urll)
      .toPromise()
      .then( (response) => {
        resolve(response as Promocion);
      }, (error) => {
        reject(error);
      })
  })
  return promise;
  }
  getPaquete = (id): Promise<ServiciosEnPromocion> => {
    let urll = 'https://localhost:44380/api/ServiciosEnPromocion/' + id;
    let promise = new Promise<ServiciosEnPromocion>((resolve, reject) => {
      this.http.get(urll)
      .toPromise()
      .then( (response) => {
        resolve(response as ServiciosEnPromocion);
      }, (error) => {
        reject(error);
      })
  })
  return promise; 
  }
}
