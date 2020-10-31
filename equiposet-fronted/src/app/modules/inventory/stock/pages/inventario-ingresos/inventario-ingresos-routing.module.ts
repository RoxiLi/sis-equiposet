import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InventarioComponent} from '../inventario/inventario.component';
import {InventarioIngresosComponent} from './inventario-ingresos.component';

const routes: Routes = [
  {
    path: '',
    component: InventarioIngresosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventarioIngresosRoutingModule { }
