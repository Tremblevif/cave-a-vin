import { Component } from '@angular/core';
import { SESSION } from './domain/services/session.service';

@Component({
  selector: 'cra-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'suivi-activite';

  constructor () {
    SESSION.login('Benoit', 'LABBE');
  }
}
