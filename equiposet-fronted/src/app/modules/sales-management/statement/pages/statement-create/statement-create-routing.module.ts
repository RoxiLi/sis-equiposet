import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {VexRoutes} from 'src/@vex/interfaces/vex-route.interface';
import {StatementCreateComponent} from './statement-create.component';

const routes: VexRoutes  = [
  {
    path: '',
    component: StatementCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatementCreateRoutingModule { }
