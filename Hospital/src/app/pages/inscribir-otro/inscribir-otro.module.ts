import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscribirOtroPageRoutingModule } from './inscribir-otro-routing.module';

import { InscribirOtroPage } from './inscribir-otro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InscribirOtroPageRoutingModule
  ],
  declarations: [InscribirOtroPage]
})
export class InscribirOtroPageModule {}
