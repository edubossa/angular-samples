import { Component, OnInit } from '@angular/core';
import { Stock } from './stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  products: any = [];
  title: 'Products';

  productSelected: Stock;

  ngOnInit() {
    this.products.push(new Stock(1, 'Screw Driver', 400, 11));
    this.products.push(new Stock(2, 'Nut Volt', 200, 5));
    this.products.push(new Stock(3, 'Resistor', 78, 45));
    this.products.push(new Stock(1, 'Tractor', 20000, 1));
    this.products.push(new Stock(1, 'Roller', 62, 15));
  }

  ouvindoEvento(event) {
    console.log(JSON.stringify(event));
    this.productSelected = this.products.find(this.findProducts, [event.id]);
    this.productSelected.stock = this.productSelected.stock + event.updatdstockvalue;
  }

  findProducts(p) {
    return p.id === this[0];
}

}
