import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventarioIngresosRoutingModule } from './inventario-ingresos-routing.module';
import { InventarioIngresosComponent } from './inventario-ingresos.component';
import {IngresosModule} from '../../components/ingresos/ingresos.module';


@NgModule({
  declarations: [InventarioIngresosComponent],
  imports: [
    CommonModule,
    InventarioIngresosRoutingModule,
    IngresosModule
  ]
})
export class InventarioIngresosModule { }
