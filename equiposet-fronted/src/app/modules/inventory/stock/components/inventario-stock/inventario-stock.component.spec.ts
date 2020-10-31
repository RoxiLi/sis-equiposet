import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioStockComponent } from './inventario-stock.component';

describe('InventarioStockComponent', () => {
  let component: InventarioStockComponent;
  let fixture: ComponentFixture<InventarioStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventarioStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventarioStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
