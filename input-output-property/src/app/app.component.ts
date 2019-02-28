import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'test-input-output-property';

  receivePositionEventEmitter(position: Position) {
    console.log('Recebendo evento: ' + JSON.stringify(position));
  }

}
