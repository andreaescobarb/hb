import { Router, RouterEvent } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { JwtHelper } from 'src/app/helpers/jwthelper';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/models/users';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  pages = [
    {
      title: 'Inicio',
      url: '/menu/tabs',
      icon: 'home'
    },
    {
      title: 'Citas Programadas',
      url: '/menu/cuenta',
      icon: 'calendar-sharp'
    },
    {
      title: 'Inscribir',
      url: '/menu/inscribir-otro',
      icon: 'add-sharp'
    },
    {
      title: 'Ver Carrito',
      url: '/menu/carrito',
      icon: 'cart-outline'
    }
  ];
  userEmail: string;
  selectedPath = '';
  constructor(
    private router : Router,
    private authenticationService: AuthenticationService,
    private jwtHelper: JwtHelper
    ) {
    this.router.events.subscribe((event:RouterEvent) => {
      if(event && event.url){
        this.selectedPath = event.url;
      }
    });
    var decodedToken = jwtHelper.decodeToken(
      (this.authenticationService.currentUserValue as any).access_token
    ); 
    this.userEmail = decodedToken.unique_name;
  }

  ngOnInit() {
  }

  logout(){
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
