import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../services/authentication.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.page.html',
  styleUrls: ['./user-data.page.scss'],
})
export class UserDataPage implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }
  login(){
    this.authService.login();
  }

}
