import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';

@Component({
  selector: 'app-stockstatus',
  template: `
  <input type='number' [(ngModel)]='updatedstockvalue'/> <button class='btn btn-primary'
  [style.background]='color'
  (click)="stockValueChanged()">Change Stock Value</button>
  `
})
export class StockstatusComponent implements OnChanges {

  @Input() stock: number;

  @Input() productId: number;

  @Output() stockValueChange = new EventEmitter;

  color = '';

  updatedstockvalue: number;

  constructor() { }

  ngOnChanges() {
    console.log('chamando metodo ngOnChanges');
    if (this.stock > 10) {
      this.color = 'green';
    } else {
      this.color = 'red';
    }
  }

  stockValueChanged() {
    this.stockValueChange.emit({ id: this.productId, updatdstockvalue: this.updatedstockvalue });
    this.updatedstockvalue = null;
  }

}
