import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User, Usuario } from '../servicio';

@Injectable({
  providedIn: 'root'
})
export class UserControllerService {
  url = 'https://localhost:44380/api/Users';
  constructor(private http: HttpClient) { }

  create(user) {
    const httpOptions = { headers: new HttpHeaders({ 'Accept': 'application/json', 'Content-Type': 'application/json'}) }; 
    console.log(JSON.stringify(user)); 
    this.http.post(this.url,JSON.stringify(user),httpOptions)
    .toPromise()
    .then( (response) => {
      console.log(response)
    }, (error)=> {
      console.log(error.status)
    });
  }
  getUsers(){
    let promise = new Promise<User>((resolve, reject) => {
      this.http.get(this.url)
      .toPromise()
      .then( (response) => {
        resolve(response as User);
      }, (error) => {
        reject(error);
      })
  })
  return promise;
  }
  getUsuarios(){
    let promise = new Promise<Usuario>((resolve, reject) => {
      this.http.get(this.url)
      .toPromise()
      .then( (response) => {
        resolve(response as Usuario);
      }, (error) => {
        reject(error);
      })
  })
  return promise;
  }
  getDetails = (id): Promise<User> => {
    let urll = this.url + '/' + id;
    let promise = new Promise<User>((resolve, reject) => {
      this.http.get(urll)
        .toPromise()
        .then((response) => {
          resolve(response as User);
        }, (error) => {
          reject(error);
        })
    })
    return promise;
  }
}
