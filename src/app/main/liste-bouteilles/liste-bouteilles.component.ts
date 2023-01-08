import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Bouteille, Utilisateur } from 'src/app/domain/model';
import { SessionService } from 'src/app/domain/services';

@Component({
  selector: 'cra-liste-bouteilles',
  templateUrl: './liste-bouteilles.component.html',
  styleUrls: ['./liste-bouteilles.component.css'],
})
export class ListeBouteillesComponent {
  utilisateur: Utilisateur | undefined;
  @Input()
  bouteilles!: Bouteille[];
  @Input()
  bouteille!: Bouteille;
  @Output()
  bouteilleChange = new EventEmitter<Bouteille>();

  constructor(private sessionService: SessionService) {}

  select(bouteille: Bouteille) {
    this.utilisateur = this.sessionService.user;
    this.bouteilleChange.emit(bouteille);
  }

  isBottleSelected(bouteille: Bouteille): boolean {
    return this.bouteille?.id === bouteille.id;
  }
}
