import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PromocionesDetailsPage } from './promociones-details.page';

const routes: Routes = [
  {
    path: '',
    component: PromocionesDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PromocionesDetailsPageRoutingModule {}
