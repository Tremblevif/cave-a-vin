import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/domain/model';
import { SessionService } from 'src/app/domain/services';

@Component({
  selector: 'cra-user-button',
  templateUrl: './user-button.component.html',
  styleUrls: ['./user-button.component.css'],
})
export class UserButtonComponent implements OnInit {
  public utilisateur: Utilisateur | undefined;

  constructor(private sessionService: SessionService) {}

  ngOnInit(): void {
    this.utilisateur = this.sessionService.user;
  }
}
