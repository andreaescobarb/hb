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
    "Correo":"",
    "Password":"",
  };
  temporal:User;
  constructor(private router:Router, private controller:UserControllerService, private http:HttpClient) { }
  ngOnInit() {
  }
  toRegister(){
    this.router.navigate(['register']);
  }
  valid():boolean{
    this.controller.getDetails(1).then((response)=>{
      this.temporal = response;
      var temp = "";
      console.log(this.temporal.Correo);
      if(this.temporal){
        temp = this.temporal.Correo;
      }
      
    }, (error) => {
      console.log("Error: " + error.statusText);
      return false;
    });
    if(this.temporal.Correo != ""){
      return true;
    }else{
      return false;
    }
  }
  valido(){
    if(this.valid()){
      mail = this.user.Correo;
      this.router.navigate(['menu','tabs']);
    }else{
      console.log('Ocurrio un Error')
    }
  }
}
