import { Promocion } from './../servicio';
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
}
