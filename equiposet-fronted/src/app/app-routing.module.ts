import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomLayoutComponent } from './custom-layout/custom-layout.component';
import {VexRoutes} from '../@vex/interfaces/vex-route.interface';

const routes: VexRoutes = [
  {
    path: '',
    component: CustomLayoutComponent,
    children: [
      {
        path: 'inventory',
        children: [
          {
            path: 'stock',
            loadChildren: () => import('./modules/inventory/stock/stock.module').then(m => m.StockModule)
          },
        ]
      },
      {
        path: 'management',
        children: [
          {
            path: 'statement',
            loadChildren: () => import('./modules/sales-management/statement/statement.module').then(m => m.StatementModule)
          },
        ]
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'corrected',
    anchorScrolling: 'enabled',
    paramsInheritanceStrategy: 'always'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
