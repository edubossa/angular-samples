import { Component } from '@angular/core';

// https://angular.io/guide/attribute-directives
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  color: string;
}
