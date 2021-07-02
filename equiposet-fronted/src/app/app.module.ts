import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VexModule } from '../@vex/vex.module';
import { HttpClientModule } from '@angular/common/http';
import { CustomLayoutModule } from './custom-layout/custom-layout.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatPaginatorIntl} from '@angular/material/paginator';
import {MAT_DATE_LOCALE} from '@angular/material/core';
import { registerLocaleData, DatePipe } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    // Vex
    VexModule,
    CustomLayoutModule,
    MatSnackBarModule
  ],
  providers: [
    DatePipe,
    {provide: MatPaginatorIntl},
    {provide: MAT_DATE_LOCALE, useValue: 'es-419'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
