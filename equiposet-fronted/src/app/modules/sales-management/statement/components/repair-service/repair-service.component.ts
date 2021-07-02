import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {TableColumn} from 'src/@vex/interfaces/table-column.interface';
import icSearch from '@iconify/icons-ic/twotone-search';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icDeleteForever from '@iconify/icons-ic/twotone-delete-forever';
import icPersonAdd from '@iconify/icons-ic/twotone-person-add';
import {MatDialog} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions} from '@angular/material/form-field';
import {stagger20ms} from 'src/@vex/animations/stagger.animation';
import {fadeInUp400ms} from 'src/@vex/animations/fade-in-up.animation';
import {scaleFadeIn400ms} from 'src/@vex/animations/scale-fade-in.animation';
import {MatSort} from '@angular/material/sort';
import {RepairService} from "../../models/repair-service.model";
@Component({
  selector: 'vex-repair-service',
  templateUrl: './repair-service.component.html',
  styleUrls: ['./repair-service.component.scss'],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'standard'
      } as MatFormFieldDefaultOptions
    }
  ],
  animations: [
    stagger20ms,
    fadeInUp400ms,
    scaleFadeIn400ms
  ]
})
export class RepairServiceComponent implements OnInit, AfterViewInit, OnDestroy{

  @Input() repairService: RepairService[];

  tableColumns: TableColumn<RepairService>[] = [
    {
      label: 'Item',
      property: 'item',
      type: 'text',
      cssClasses: ['font-medium'],
      visible: true
    },
    {
      label: 'Detalle',
      property: 'detalle',
      type: 'text',
      cssClasses: ['text-secondary'],
      visible: true
    },
    {
      label: 'Precio',
      property: 'direccion',
      type: 'text',
      cssClasses: ['text-secondary'],
      visible: true
    },
    {
      label: '',
      property: 'menu',
      type: 'button',
      cssClasses: ['text-secondary', 'w-10'],
      visible: true
    }
  ];
  dataSource: MatTableDataSource<RepairService> | null;

  icSearch = icSearch;
  icPersonAdd = icPersonAdd;
  icDeleteForever = icDeleteForever;
  icEdit = icEdit;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor() { }

  ngOnInit(): void {
    if (!this.repairService){
      this.repairService = [];
    }
    this.dataSource = new MatTableDataSource();
    this.dataSource.data = this.repairService;
  }

  createRepairService(){

  }
  updateIdsRepairService() {
    let id = 1;
    this.repairService.forEach(repairService => {
      repairService.id = id;
      id++;
    });
  }
  updateRepairService(repairService: RepairService) {
   console.log('ok');
  }
  returnDataToParentComponent(){
    console.log('ok');
  }
  deleteContactoEmergencia(repairService: RepairService) {

  }
  trackByProperty<T>(column: TableColumn<T>) {
    return column.property;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  get visibleColumns() {
    return this.tableColumns
        .filter(column => column.visible)
        .map(column => column.property);
  }
  ngOnDestroy() {
  }

}
