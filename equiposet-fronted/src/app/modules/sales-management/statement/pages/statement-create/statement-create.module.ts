import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatNativeDateModule} from '@angular/material/core';
import { StatementCreateRoutingModule } from './statement-create-routing.module';
import { StatementCreateComponent } from './statement-create.component';
import {PageLayoutModule} from 'src/@vex/components/page-layout/page-layout.module';
import {BreadcrumbsModule} from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import {FlexModule} from '@angular/flex-layout';
import {MatStepperModule} from '@angular/material/stepper';
import {MatIconModule} from '@angular/material/icon';
import {IconModule} from '@visurel/iconify-angular';
import {ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {SecondaryToolbarModule} from 'src/@vex/components/secondary-toolbar/secondary-toolbar.module';
import {ContainerModule} from 'src/@vex/directives/container/container.module';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {RepairServiceModule} from '../../components/repair-service/repair-service.module';

@NgModule({
  declarations: [StatementCreateComponent],
  imports: [
    CommonModule,
    StatementCreateRoutingModule,
    SecondaryToolbarModule,
    BreadcrumbsModule,
    IconModule,
    MatStepperModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    FlexModule,
    MatTooltipModule,
    ContainerModule,
    RepairServiceModule

  ]
})
export class StatementCreateModule { }
