import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Bouteille, Utilisateur } from 'src/app/domain/model';
import { SESSION } from 'src/app/domain/services';

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

  ngOnInit(): void {
    this.utilisateur = SESSION.user;
  }

  select(bouteille: Bouteille) {
    this.bouteilleChange.emit(bouteille);
  }

  isBottleSelected(bouteille: Bouteille): boolean {
    return this.bouteille?.id === bouteille.id;
  }
}
