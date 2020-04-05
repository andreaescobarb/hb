import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiciosDetailsPageRoutingModule } from './servicios-details-routing.module';

import { ServiciosDetailsPage } from './servicios-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiciosDetailsPageRoutingModule
  ],
  declarations: [ServiciosDetailsPage]
})
export class ServiciosDetailsPageModule {}
