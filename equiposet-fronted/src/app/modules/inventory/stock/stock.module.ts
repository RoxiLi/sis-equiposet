import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockRoutingModule } from './stock-routing.module';
import { StockComponent } from './stock.component';
import {PageLayoutModule} from '../../../../@vex/components/page-layout/page-layout.module';
import {BreadcrumbsModule} from '../../../../@vex/components/breadcrumbs/breadcrumbs.module';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [StockComponent, ],
  imports: [
    CommonModule,
    StockRoutingModule,
    PageLayoutModule,
    BreadcrumbsModule,
    MatTabsModule
  ]
})
export class StockModule { }
