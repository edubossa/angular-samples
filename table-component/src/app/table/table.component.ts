import { Component, OnInit, Input } from '@angular/core';
import { TableColumnComponent } from './table-column/table-column.component';
import { getQueryValue } from '@angular/core/src/view/query';

export enum TheadType {
  empty = "",
  dark = "thead-dark",
  light = "thead-light"
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input()
  data: Array<any>;
  
  @Input()
  threadType: string;

  columns: TableColumnComponent[] = [];

  constructor() { }

  ngOnInit() {
  }

  addColumn(column: TableColumnComponent) {
    this.columns.push(column);
  }

  getProperty(item: any, property: string): string {
    let propertyArray = property.split('.');
    let value = item;
    for (let i = 0; i < propertyArray.length; i++) {

        if (value == null) {
            return null;
        }

        let property = propertyArray[i];
        value = value[property];
    }
    return value;
  }

  
  getThreadClass(): string {
    for (var enumMember in TheadType) {
      if (this.threadType == enumMember) {
        return TheadType[enumMember];
      }
    }
    return TheadType.empty;
  }

  testData() {
    console.log(JSON.stringify(this.data));
  }

}
