import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatementCreateRoutingModule } from './statement-create-routing.module';
import { StatementCreateComponent } from './statement-create.component';


@NgModule({
  declarations: [StatementCreateComponent],
  imports: [
    CommonModule,
    StatementCreateRoutingModule
  ]
})
export class StatementCreateModule { }
