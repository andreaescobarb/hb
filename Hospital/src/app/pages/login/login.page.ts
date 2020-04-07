import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export var mail;
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user;
  constructor(private router:Router) { }



  ngOnInit() {
  }
  toRegister(){
    mail = this.user;
    this.router.navigate(['register']);
  }
}
