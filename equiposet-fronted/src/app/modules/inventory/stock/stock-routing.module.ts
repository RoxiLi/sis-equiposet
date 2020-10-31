import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StockComponent} from './stock.component';

const routes: Routes = [
  {
    path: '',
    component: StockComponent,
    data: {
      toolbarShadowEnabled: true,
      containerEnabled: true
    },
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/inventario/inventario.module').then(m => m.InventarioModule)
      },
      {
        path: 'inventario-ingresos',
        loadChildren: () => import('./pages/inventario-ingresos/inventario-ingresos.module').then(m => m.InventarioIngresosModule)
      },
      {
        path: 'inventario-salidas',
        loadChildren: () => import('./pages/inventario-salidas/inventario-salidas.module').then(m => m.InventarioSalidasModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule { }
