import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventarioRoutingModule } from './inventario-routing.module';
import { InventarioComponent } from './inventario.component';
import {InventarioStockModule} from '../../components/inventario-stock/inventario-stock.module';


@NgModule({
  declarations: [InventarioComponent],
  imports: [
    CommonModule,
    InventarioRoutingModule,
    InventarioStockModule

  ]
})
export class InventarioModule { }
