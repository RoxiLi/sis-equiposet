import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icSearch from '@iconify/icons-ic/twotone-search';
import icAdd from '@iconify/icons-ic/twotone-add';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icEye from '@iconify/icons-fa-solid/eye';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import {FormControl} from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import {TableColumn} from 'src/@vex/interfaces/table-column.interface';
import {Statement} from '../../models/statement.model';
import {fadeInUp400ms} from 'src/@vex/animations/fade-in-up.animation';
import {stagger40ms} from 'src/@vex/animations/stagger.animation';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions} from '@angular/material/form-field';
import {scaleFadeIn400ms} from 'src/@vex/animations/scale-fade-in.animation';
import {ReplaySubject} from 'rxjs';
import {SelectionModel} from '@angular/cdk/collections';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {ActivatedRoute, Router} from '@angular/router';
import {untilDestroyed} from '@ngneat/until-destroy';
import {StatementService} from '../../services/statement.service';
import {MatSnackBar} from '@angular/material/snack-bar';
// import {untilDestroyed} from 'ngx-take-until-destroy';
// import {DateUtil} from 'src/app/core/utils/date-utils';


@Component({
  selector: 'vex-statement-list',
  templateUrl: './statement-list.component.html',
  styleUrls: ['./statement-list.component.scss'],
  animations: [
    fadeInUp400ms,
    stagger40ms,
    scaleFadeIn400ms
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'standard'
      } as MatFormFieldDefaultOptions
    }
  ]
})
export class StatementListComponent implements OnInit, AfterViewInit, OnDestroy {

  subject$: ReplaySubject<Statement[]> = new ReplaySubject<Statement[]>(1);
  statements: Statement[];

  @Input()
  columns: TableColumn<Statement>[] = [
    {label: 'Casilla', property: 'checkbox', type: 'checkbox', visible: true},
    {label: 'Fecha', property: 'fechaInicio', type: 'text', visible: true},
    {label: 'Código', property: 'codigo', type: 'text', visible: true},
    {label: 'Estado', property: 'estado', type: 'text', visible: true},
    {label: 'Acciones', property: 'actions', type: 'button', visible: true}
  ];

  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource: MatTableDataSource<Statement> | null;
  selection = new SelectionModel<Statement>(true, []);
  searchCtrl = new FormControl();

  icEdit = icEdit;
  icSearch = icSearch;
  icDelete = icDelete;
  icAdd = icAdd;
  icFilterList = icFilterList;
  icMoreHoriz = icMoreHoriz;
  icEye = icEye;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
      private snackbar: MatSnackBar,
      private router: Router,
      private route: ActivatedRoute,
      private statementService: StatementService
  ) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();
    this.searchCtrl.valueChanges
        .pipe(untilDestroyed(this))
        .subscribe(value => this.onFilterChange(value));
  }
  getStatements(): void {
  }

  startDeleteStatement(listStatement?: Statement[],
                       statement?: Statement) {

  }

  createStatement() {
    this.router.navigate(['./create'], {relativeTo: this.route})
  }
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  trackByProperty<T>(index: number, column: TableColumn<T>) {
    return column.property;
  }
  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }
  toggleColumnVisibility(column, event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    column.visible = !column.visible;
  }
  showDetalleStatement(statement: Statement) {
    const code = statement.code;
    // this.evolucionSharedService.setEvolucion(evolucion);
    // this.router.navigate(['./', codigo], {relativeTo: this.route});
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
  }
  onFilterChange(value: string) {
    if (!this.dataSource) {
      return;
    }
    value = value.trim();
    value = value.toLowerCase();
    this.dataSource.filter = value;
  }
  showNotification(message: string, action: string) {
    this.snackbar.open(message, action, {
      duration: 5000
    });
  }
}
