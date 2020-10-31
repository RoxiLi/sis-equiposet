import { Component, OnInit } from '@angular/core';
import {Link} from '../../../../@vex/interfaces/link.interface';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'vex-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  layoutCtrl = new FormControl('full');
  links: Link[] = [
    {
      label: 'STOCK',
      route: './',
      routerLinkActiveOptions: { exact: true }
    },
    {
      label: 'INGRESOS',
      route: './inventario-ingresos'
    },
    {
      label: 'SALIDAS',
      route: './inventario-salidas',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
