import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitasDetailsPage } from './citas-details.page';

const routes: Routes = [
  {
    path: '',
    component: CitasDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitasDetailsPageRoutingModule {}
