import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { Position } from '../position';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html'
})
export class OutputPropertyComponent implements OnInit {

  @Input() value: number;

  @Output() event = new EventEmitter();

  // Usado para receber o elemento (UI) da tela
  @ViewChild('campoInput') campoValorInput: ElementRef;

  constructor() { }

  ngOnInit() {
    this.value = 0;
  }

  increment() {
    // this.value++;
    this.event.emit(new Position(this.campoValorInput.nativeElement.value++)); // OBS outra forma de pegar o valo
  }

  decrement() {
    // this.value--;
    this.event.emit(new Position(this.campoValorInput.nativeElement.value--));
  }

}
