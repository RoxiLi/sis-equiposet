import { Component, OnInit } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import icPrint from '@iconify/icons-ic/twotone-print';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icPerson from '@iconify/icons-ic/twotone-person';
import icLocationCity from '@iconify/icons-ic/twotone-location-city';
import icCheck from '@iconify/icons-ic/check';
import icDescription from '@iconify/icons-ic/twotone-description';
import icDoneAll from '@iconify/icons-ic/twotone-done-all';
import icArrowDropDown from '@iconify/icons-ic/twotone-arrow-drop-down';
import icAdd from '@iconify/icons-ic/twotone-add';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import {fadeInUp400ms} from 'src/@vex/animations/fade-in-up.animation';
import {stagger40ms} from 'src/@vex/animations/stagger.animation';
import {scaleFadeIn400ms} from 'src/@vex/animations/scale-fade-in.animation';
import {scaleIn400ms} from 'src/@vex/animations/scale-in.animation';
import {fadeInRight400ms} from 'src/@vex/animations/fade-in-right.animation';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Statement} from '../../models/statement.model';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'vex-statement-create',
  templateUrl: './statement-create.component.html',
  styleUrls: ['./statement-create.component.scss'],
  animations: [
    fadeInUp400ms,
    stagger40ms,
    scaleFadeIn400ms,
    scaleIn400ms,
    fadeInRight400ms
  ],
})
export class StatementCreateComponent implements OnInit {

  statementFormGroup: FormGroup;


  icMoreVert = icMoreVert;
  icClose = icClose;
  icPrint = icPrint;
  icDelete = icDelete;
  icCheck = icCheck;
  icPerson = icPerson;
  icLocationCity = icLocationCity;
  icPhone = icPhone;
  icDoneAll = icDoneAll;
  icDescription = icDescription;
  icArrowDropDown = icArrowDropDown;
  icAdd = icAdd;
  icMoreHoriz = icMoreHoriz;
  maxDate = new Date();
  date = new Date();


  razonList: any;
  unidadesRequirientes: any;
  dispensarios: any;

  statement: Statement;

  constructor(
      private  snackbar: MatSnackBar, private fb: FormBuilder,
      private dialog: MatDialog,
      private router: Router,
      private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.updateDataStatement();
  }

  isFemenino() {

  }

  createStatement() {

  }
  updateDataStatement() {
    this.statementFormGroup = this.fb.group({
      fechaInicio: null,
      dateSatatement: null,
      equipo: null,
      propietario: null
    });

  }

  setPeso($event: KeyboardEvent) {

  }

  setTalla($event: KeyboardEvent) {

  }
  showNotification(message: string, action: string) {
    this.snackbar.open(message, action, {
      duration: 5000
    });
  }
}
