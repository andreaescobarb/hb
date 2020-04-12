import { HttpClient } from '@angular/common/http';
import { UserControllerService } from './../../services/user-controller.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/servicio';

export var mail;
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  url = "";
  user = {
    "Correo": "",
    "Password": "",
  };
  temporal: User;
  constructor(private router: Router, private controller: UserControllerService, private http: HttpClient) { }
  ngOnInit() {
  }
  toRegister() {
    this.router.navigate(['register']);
  }

  valido() {
    this.router.navigate(['user-data']);
    this.controller.getUsers().then((response) => {
      this.temporal = response;
      var flag = true;
      for (let data of ((this.temporal as unknown) as Iterable<User>)) {
        if (data.Correo == this.user.Correo && data.Password == this.user.Password) {
          mail = this.user.Correo;
          this.router.navigate(['menu', 'tabs']);
        }
      }
      console.log('Correo o contraseña incorrectos');
    }, (error) => {
      console.log("Error: " + error.statusText);
    });
  }
}

