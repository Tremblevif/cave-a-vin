import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/domain/model';
import { SESSION } from 'src/app/domain/services';

@Component({
  selector: 'cra-user-button',
  templateUrl: './user-button.component.html',
  styleUrls: ['./user-button.component.css']
})
export class UserButtonComponent implements OnInit {
  public utilisateur:Utilisateur | undefined;

  ngOnInit(): void {
    this.utilisateur = SESSION.user;
  }
}
