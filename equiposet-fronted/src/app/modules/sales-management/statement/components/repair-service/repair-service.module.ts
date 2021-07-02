import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepairServiceComponent } from './repair-service.component';
import {IconModule} from "@visurel/iconify-angular";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
    declarations: [RepairServiceComponent],
    exports: [
        RepairServiceComponent
    ],
    imports: [
        CommonModule,
        IconModule,
        MatTableModule,
        MatIconModule
    ]
})
export class RepairServiceModule { }
