import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatementListRoutingModule } from './statement-list-routing.module';
import { StatementListComponent } from './statement-list.component';
import {ExtendedModule, FlexModule} from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {IconModule} from '@visurel/iconify-angular';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatSortModule} from '@angular/material/sort';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatPaginatorModule} from '@angular/material/paginator';
import {PageLayoutModule} from 'src/@vex/components/page-layout/page-layout.module';
import {BreadcrumbsModule} from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [StatementListComponent],
  // exports: { StatementListComponent},
  imports: [
    CommonModule,
    StatementListRoutingModule,
    PageLayoutModule,
    BreadcrumbsModule,
    MatIconModule,
    IconModule,
    ReactiveFormsModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatMenuModule,
    FormsModule,
    FlexModule,
    ExtendedModule,
    IconModule,
    MatButtonModule,
    MatTooltipModule,
    MatSortModule,
    MatSnackBarModule
  ]
})
export class StatementListModule { }
