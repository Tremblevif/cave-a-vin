import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'cra-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cave-a-vin';

  constructor(title: Title) {
    title.setTitle('Ma superbe app de cave à vin');
  }
}
