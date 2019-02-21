import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TableColumnComponent } from './table-column/table-column.component';
import { getQueryValue } from '@angular/core/src/view/query';

export enum TheadType {
  empty = '',
  dark = 'thead-dark',
  light = 'thead-light'
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

  @Input()
  hasCheckbox: false;

  @Output()
  selectedLine = new EventEmitter;

  columns: TableColumnComponent[] = [];

  itemsChecked: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  addColumn(column: TableColumnComponent) {
    this.columns.push(column);
  }

  getProperty(item: any, property: string): string {
    const propertyArray = property.split('.');
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
    for (const enumMember in TheadType) {
      if (this.threadType == enumMember) {
        return TheadType[enumMember];
      }
    }
    return TheadType.empty;
  }

  selectItem(item: any) {
    this.selectedLine.emit(item);
  }

  // TODO Enviar Event Emitter - e remover o item caso desmarcado ou seja se ja foi adicionado remove se nao adiciona.
  checkItem(item: any) {
    this.itemsChecked.push(item);
  }

  testData() {
    console.log('ITEMS CHECKED' + JSON.stringify(this.itemsChecked));
  }

}
