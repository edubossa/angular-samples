import { Component, OnInit, Input, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';
import { TableColumnComponent } from './table-column/table-column.component';

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
  lineEvent = new EventEmitter;

  @Output()
  linesCheckedEvent = new EventEmitter;

  columns: TableColumnComponent[] = [];

  itemsChecked: any[] = [];

  @ViewChild('table')
  el: ElementRef;

  checkElement: HTMLInputElement;

  constructor() {
  }

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
      if (this.threadType === enumMember) {
        return TheadType[enumMember];
      }
    }
    return TheadType.empty;
  }

  selectItem(item: any, index) {
    this.addItemToCheckList(item, index);
    this.lineEvent.emit(item);
  }

  addItemToCheckList(item: any, index) {

    if (!this.hasCheckbox) {
      return;
    }

    // alter color line of table when selected
    this.el.nativeElement.rows[index + 1].style.backgroundColor =
      this.el.nativeElement.rows[index + 1].style.backgroundColor === 'rgb(165, 214, 167)' ? 'transparent' : 'rgb(165, 214, 167)';

    // check and unchecked the checkbox element
    this.checkElement = document.getElementById(this.getItemToCheck(item)) as HTMLInputElement;
    this.checkElement.checked = !this.checkElement.checked;

    const filter = this.itemsChecked.filter(value => value === this.getItemToCheck(item));
    if (filter.length > 0) {
      const index = this.itemsChecked.indexOf(this.getItemToCheck(item));
      this.itemsChecked.splice(index, 1); // Indice inicial e a quantidade de elementos a ser removido
    } else {
      this.itemsChecked.push(this.getItemToCheck(item));
    }

    this.linesCheckedEvent.emit(this.itemsChecked);

  }

  getItemToCheck(item: any) {
    return this.getProperty(item, this.columns[0].property);
  }

}
