import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/domain/model';
import { SessionService } from 'src/app/domain/services';

@Component({
  selector: 'cra-user-button',
  templateUrl: './user-button.component.html',
  styleUrls: ['./user-button.component.css'],
})
export class UserButtonComponent {
  public utilisateur: Utilisateur | undefined;

  constructor(sessionService: SessionService) {
    this.utilisateur = sessionService.user;
  }
}
