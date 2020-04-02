import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiciosControllerService {
  url = 'http://localhost:59328/Servicios/';
  //apiKey="?"

  constructor(private http:HttpClient) { 
  }
  getServicios(): Observable<any>{
    return this.http.get(this.url).pipe(map(results => {
      console.log(results);
      return results;
    }));
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
