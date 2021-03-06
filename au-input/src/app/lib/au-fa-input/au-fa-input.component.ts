import { Component, OnInit, Input, AfterContentInit, ContentChild, HostBinding } from '@angular/core';
import { InputRefDirective } from '../common/input-ref.directive';

@Component({
  selector: 'au-fa-input',
  templateUrl: './au-fa-input.component.html',
  styleUrls: ['./au-fa-input.component.scss']
})
export class AuFaInputComponent implements OnInit, AfterContentInit {

  @Input() icon: string;

  @ContentChild(InputRefDirective) input: InputRefDirective;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    if (!this.input) {
      console.error('the au-fa-input needs an input inside');
    }
  }

  @HostBinding('class.wallace-focus')
  get isInputFocus() {
    return this.input ? this.input.focus : false;
  }

  get classes() {

    const cssClasses = {};

    if (this.icon) {
      cssClasses['fa-' + this.icon] = true;
    }

    return cssClasses;
  }

}
