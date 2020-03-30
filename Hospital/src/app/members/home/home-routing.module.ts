import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path: 'citas',
        loadChildren: () => import('./citas/citas.module').then( m => m.CitasPageModule)
      },
      {
        path: 'promociones',
        loadChildren: () => import('./promociones/promociones.module').then( m => m.PromocionesPageModule)
      },
      {
        path: '',
        loadChildren: () => import('./servicios/servicios.module').then( m => m.ServiciosPageModule)
      }  
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}