import { Component, OnInit, Input } from '@angular/core';
import { TableComponent } from '../table.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'table-column',
  template: `
  `,
})
export class TableColumnComponent implements OnInit {

  @Input()
  label: string;

  @Input()
  property: string;

  constructor(table: TableComponent) {
    table.addColumn(this);
   }

  ngOnInit() {
  }

}
