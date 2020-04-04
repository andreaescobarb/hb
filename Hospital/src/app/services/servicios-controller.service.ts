import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class Servicios{
  public idServicio: number;
  public nombreServicio: string;
  public precio: number;
  public recomendaciones: string;

  constructor(idServicio:number, nombreServicio:string, precio:number, recomendaciones:string){
    this.idServicio =idServicio;
    this.nombreServicio = nombreServicio;
    this.precio = precio;
    this.recomendaciones=recomendaciones;
  }
}


@Injectable({
  providedIn: 'root'
})
export class ServiciosControllerService {
  url = 'https://localhost:44356/api/HOSPAPI/ListarServicios';
  //apiKey="?"

  constructor(private http:HttpClient) { 
  }
  getServicios(): Observable<any>{
    var urll = this.url;
    urll += "ListarServicios";
    return this.http.post(this.url,{});
  }
  getDetails(servicio: String){
    var secondurl = 'http://localhost:59328/Servicios/Details/';
    secondurl += servicio;
    return this.http.get(secondurl).pipe(map(results => {
      console.log(results);
      return results;
    }));
  }
}
