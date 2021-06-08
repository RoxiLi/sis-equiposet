import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VexRoutes} from 'src/@vex/interfaces/vex-route.interface';
import {StatementListComponent} from './statement-list.component';

const routes: VexRoutes  = [
  {
    path: '',
    component: StatementListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatementListRoutingModule { }
