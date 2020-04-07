import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paciente } from '../servicio';

@Injectable({
  providedIn: 'root'
})
export class PacientesControllerService {
  url = 'https://localhost:44380/api/Pacientes';
  constructor(private http:HttpClient) { }
  create(paciente:Paciente){
    this.http.post(this.url,paciente);
  }
}
