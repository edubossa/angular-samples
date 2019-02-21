import { Component, OnInit, Input, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';
import { TableColumnComponent } from './table-column/table-column.component';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';

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

  columns: TableColumnComponent[] = [];

  itemsChecked: any[] = [];

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { // TODO REMOVER

    this.form = this.formBuilder.group({
      items: new FormArray([])
    });  
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
      if (this.threadType == enumMember) {
        return TheadType[enumMember];
      }
    }
    return TheadType.empty;
  }

  //https://stackoverflow.com/questions/5767325/how-do-i-remove-a-particular-element-from-an-array-in-javascript
  selectItem(item: any) {
    document.getElementById(item.id).checked = !document.getElementById(item.id).checked;
    
    let filter = this.itemsChecked.filter(value => value == item.id);

    if (filter.length > 0) {
      this.itemsChecked.slice(item.id);
    } else {
      this.itemsChecked.push(item.id);
    }
    
    this.lineEvent.emit(item);
  }

  testData() {
    console.log('ITEMS CHECKED' + JSON.stringify(this.itemsChecked));
  }

}
