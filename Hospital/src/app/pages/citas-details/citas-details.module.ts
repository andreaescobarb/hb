import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CitasDetailsPageRoutingModule } from './citas-details-routing.module';

import { CitasDetailsPage } from './citas-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CitasDetailsPageRoutingModule
  ],
  declarations: [CitasDetailsPage]
})
export class CitasDetailsPageModule {}
