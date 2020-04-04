import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PromocionesControllerService } from 'src/app/services/promociones-controller.service';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.page.html',
  styleUrls: ['./promociones.page.scss'],
})
export class PromocionesPage implements OnInit {
  promociones:Observable<any>;
  constructor(private controller:PromocionesControllerService) { }

  ngOnInit() {
    this.promociones = this.controller.getPromociones();
  }

}
