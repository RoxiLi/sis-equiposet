import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventarioStockComponent } from './inventario-stock.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {PageLayoutModule} from '../../../../../../@vex/components/page-layout/page-layout.module';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {BreadcrumbsModule} from '../../../../../../@vex/components/breadcrumbs/breadcrumbs.module';
import {MatTableModule} from '@angular/material/table';
import {HttpClientModule} from '@angular/common/http';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';
import {ContainerModule} from '../../../../../../@vex/directives/container/container.module';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSliderModule} from '@angular/material/slider';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {IconModule} from '@visurel/iconify-angular';



@NgModule({
  declarations: [InventarioStockComponent],
  imports: [
    CommonModule,
    PageLayoutModule,
    MatPaginatorModule,
    HttpClientModule,
    BreadcrumbsModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    MatIconModule,
    FlexLayoutModule,
    MatButtonModule,
    MatMenuModule,
    IconModule,
    FormsModule,
    MatTooltipModule,
    ReactiveFormsModule,
    ContainerModule,
    MatSelectModule,
    MatDialogModule,
    MatSliderModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatRippleModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatMenuModule,
    MatSnackBarModule,
    MatAutocompleteModule,
    MatNativeDateModule,
    MatDatepickerModule
  ],
  exports: [
    InventarioStockComponent]
})
export class InventarioStockModule { }
