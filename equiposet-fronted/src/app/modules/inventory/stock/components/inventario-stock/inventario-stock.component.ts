import {AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {fadeInUp400ms} from '../../../../../../@vex/animations/fade-in-up.animation';
import {stagger40ms} from '../../../../../../@vex/animations/stagger.animation';
import {scaleFadeIn400ms} from '../../../../../../@vex/animations/scale-fade-in.animation';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions} from '@angular/material/form-field';
import {FormControl} from '@angular/forms';
import {TableColumn} from '../../../../../../@vex/interfaces/table-column.interface';
import {InventarioStock} from '../../models/inventario-stock.model';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icSearch from '@iconify/icons-ic/twotone-search';
import icAdd from '@iconify/icons-ic/twotone-add';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icFolder from '@iconify/icons-ic/twotone-folder';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'vex-inventario-stock',
  templateUrl: './inventario-stock.component.html',
  styleUrls: ['./inventario-stock.component.scss'],
  animations: [fadeInUp400ms, stagger40ms,  scaleFadeIn400ms],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'standard'
      } as MatFormFieldDefaultOptions
    }
  ]
})
export class InventarioStockComponent implements OnInit,  AfterViewInit, OnDestroy {
  layoutCtrl = new FormControl('boxed');
  @Input()
  columns: TableColumn<InventarioStock>[] = [
    {
      label: 'Checkbox',
      property: 'checkbox',
      type: 'checkbox',
      visible: true
    },
    {
      label: 'Egresos',
      property: 'tipoEgreso',
      type: 'text',
      visible: true
    },
    {
      label: 'Valor',
      property: 'valorEgreso',
      type: 'text',
      visible: true
    },
    { label: 'Actions', property: 'actions', type: 'button', visible: true }
  ];
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource: MatTableDataSource<InventarioStock> | null;
  selection = new SelectionModel<InventarioStock>(true, []);

  icEdit = icEdit;
  icSearch = icSearch;
  icMoreHoriz = icMoreHoriz;
  icDelete = icDelete;
  icAdd = icAdd;
  icFilterList = icFilterList;
  icFolder = icFolder;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(
      private snackbar: MatSnackBar,
      private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();
  }
  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  ngAfterViewInit(): void {
    this.dataSource = new MatTableDataSource();
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy(): void {
  }
  showNotification(message: string, action: string) {
    this.snackbar.open(message, action, {
      duration: 5000
    });
  }
  toggleColumnVisibility(column, event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    column.visible = !column.visible;
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
  trackByProperty<T>(column: TableColumn<T>) {
    return column.property;
  }

}
