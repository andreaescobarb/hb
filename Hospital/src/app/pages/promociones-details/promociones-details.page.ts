import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PromocionesControllerService } from 'src/app/services/promociones-controller.service';

@Component({
  selector: 'app-promociones-details',
  templateUrl: './promociones-details.page.html',
  styleUrls: ['./promociones-details.page.scss'],
})
export class PromocionesDetailsPage implements OnInit {
  promocion = null;
  constructor(private activatedRoute: ActivatedRoute, private controller:PromocionesControllerService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
