import { Component, OnInit, Input } from '@angular/core';
import { TableComponent } from '../table.component';

@Component({
  selector: 'table-column',
  templateUrl: './table-column.component.html',
  styleUrls: ['./table-column.component.css']
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
