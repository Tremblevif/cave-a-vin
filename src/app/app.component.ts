import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SessionService } from './domain/services/session.service';

@Component({
  selector: 'cra-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cave-a-vin';

  constructor(title: Title, sessionService: SessionService) {
    sessionService.login('Harrison', 'Stafford');
    title.setTitle('Ma superbe app de cave à vin');
  }
}
