import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private authService:AuthenticationService) { }

  ngOnInit() {
  }

  login(){
    this.authService.login();
  }
}
