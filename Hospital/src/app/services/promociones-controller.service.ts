import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PromocionesControllerService {
  url = 'http://localhost:59328/Promociones/';
  constructor(private http:HttpClient) { 
  }

  getPromociones(): Observable<any>{
    return this.http.get(this.url).pipe(map(results => {
      console.log(results);
      return results;
    }));
  }
  getDetails(promocion: String){
    var secondurl = 'http://localhost:59328/Promociones/Details/';
    secondurl += promocion;
    return this.http.get(secondurl).pipe(map(results => {
      console.log(results);
      return results;
    }));
  }
}
