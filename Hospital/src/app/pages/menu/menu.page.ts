import { Router, RouterEvent } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

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
    }
  ];
  selectedPath = '';
  constructor(
    private router : Router,
    private authenticationService: AuthenticationService
    ) {
    this.router.events.subscribe((event:RouterEvent) => {
      if(event && event.url){
        this.selectedPath = event.url;
      }
    });
  }

  ngOnInit() {
  }

  logout(){
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
