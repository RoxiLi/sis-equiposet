import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioIngresosComponent } from './inventario-ingresos.component';

describe('InventarioIngresosComponent', () => {
  let component: InventarioIngresosComponent;
  let fixture: ComponentFixture<InventarioIngresosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventarioIngresosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventarioIngresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
