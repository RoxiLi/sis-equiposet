import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventarioSalidasRoutingModule } from './inventario-salidas-routing.module';
import { InventarioSalidasComponent } from './inventario-salidas.component';
import {SalidasModule} from '../../components/salidas/salidas.module';


@NgModule({
  declarations: [InventarioSalidasComponent],
  imports: [
    CommonModule,
    InventarioSalidasRoutingModule,
      SalidasModule
  ]
})
export class InventarioSalidasModule { }
