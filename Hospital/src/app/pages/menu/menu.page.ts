import { Router, RouterEvent } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  pages = [
    {
      title: 'Inicio',
      url: '/menu/tabs'
    },
    {
      title: 'Cuenta',
      url: '/menu/cuenta'
    },
    {
      title: 'Inscribir',
      url: '/menu/inscribir-otro'
    }
  ];
  selectedPath = '';
  constructor(private router : Router) {
    this.router.events.subscribe((event:RouterEvent) => {
      if(event && event.url){
        this.selectedPath = event.url;
      }
    });
  }

  ngOnInit() {
  }

}
