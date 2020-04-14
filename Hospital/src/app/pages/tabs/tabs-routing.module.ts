import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children:[
      {
        path: 'servicios',
        loadChildren: () => import('../servicios/servicios.module').then(m => m.ServiciosPageModule)
      },
      {
        path: 'servicios/:id',
        loadChildren: () => import('../servicios-details/servicios-details.module').then(m => m.ServiciosDetailsPageModule)
      },
      {
        path: 'citas',
        loadChildren: () => import('../citas/citas.module').then(m => m.CitasPageModule)
      },
      {
        path: 'citas/:id',
        loadChildren: () => import('../citas-details/citas-details.module').then(m => m.CitasDetailsPageModule)
      },
      {
        path: 'citas/:id/:doc',
        loadChildren: () => import('../perfil-doctor/perfil-doctor.module').then(m => m.PerfilDoctorPageModule)
      },
      {
        path: 'promociones',
        loadChildren: () => import('../promociones/promociones.module').then(m => m.PromocionesPageModule)
      },
      {
        path: 'promociones/:id',
        loadChildren: () => import('../promociones-details/promociones-details.module').then(m => m.PromocionesDetailsPageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/servicios',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
