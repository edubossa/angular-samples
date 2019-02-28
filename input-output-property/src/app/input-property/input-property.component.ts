import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-property',
  templateUrl: './input-property.component.html'
})
export class InputPropertyComponent implements OnInit {

  @Input() name: string;

  @Input() lastname: string;

  @Input() event: string;

  constructor() { }

  ngOnInit() {

  }

}
