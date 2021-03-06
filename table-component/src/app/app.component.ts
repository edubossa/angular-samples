import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Table Component';

  data = [
    // tslint:disable-next-line:max-line-length
    {'id' : 1, 'codigo' : 'PETR4', 'nome' : 'PETROBRAS PN', 'qtde' : '10.000', 'cc' : 'CC/2565/654215-9', 'custodiante' : { 'nome' :  'CUST-01'} },
    // tslint:disable-next-line:max-line-length
    {'id' : 2, 'codigo' : 'ALPQ2', 'nome' : 'ALAMEDA CAMPOS', 'qtde' : '35.000', 'cc' : 'CC/1178/999985-3', 'custodiante' : { 'nome' :  'WALLACE'}},
    // tslint:disable-next-line:max-line-length
    {'id' : 3, 'codigo' : 'MICMOUSE', 'nome' : 'USINAS PNA', 'qtde' : '3.000', 'cc' : 'CC/1156/847454-7', 'custodiante' : { 'nome' :  'BRADESCO'}},
    // tslint:disable-next-line:max-line-length
    {'id' : 4, 'codigo' : 'ROBERT', 'nome' : 'CATEK MUSIC', 'qtde' : '1.500', 'cc' : '', 'custodiante' : { 'nome' :  'PRIME MUSIC'}},
    // tslint:disable-next-line:max-line-length
    {'id' : 5, 'codigo' : 'BRALTDA', 'nome' : 'BRASIL PREVIA', 'qtde' : '45.000', 'cc' : 'CC/6545/325456-9', 'custodiante' : { 'nome' :  'BANCO DO BRASIL'}}
  ];


  onSelected(line) {
    console.log(JSON.stringify(line));
  }

  onChecked(lines) {
    console.log(JSON.stringify(lines));
  }

}
