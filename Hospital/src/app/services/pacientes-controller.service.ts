import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PacientesControllerService {
  url = 'https://localhost:44380/api/Pacientes';
  constructor(private http:HttpClient) { }
  create(paciente){
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
}
