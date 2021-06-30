import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/statement-list/statement-list.module').then(m => m.StatementListModule)
      },
      {
        path: 'create',
        loadChildren: () => import('./pages/statement-create/statement-create.module').then(m => m.StatementCreateModule)
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatementRoutingModule { }
