import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InventarioComponent} from '../inventario/inventario.component';
import {InventarioSalidasComponent} from './inventario-salidas.component';

const routes: Routes = [
  {
    path: '',
    component: InventarioSalidasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventarioSalidasRoutingModule { }
