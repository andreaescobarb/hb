import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InscribirOtroPage } from './inscribir-otro.page';

describe('InscribirOtroPage', () => {
  let component: InscribirOtroPage;
  let fixture: ComponentFixture<InscribirOtroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscribirOtroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InscribirOtroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
