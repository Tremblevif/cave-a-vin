import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Bouteille } from 'src/app/domain/model';
import { SESSION } from 'src/app/domain/services';

@Component({
  selector: 'cra-detail-bouteille',
  templateUrl: './detail-bouteille.component.html',
  styleUrls: ['./detail-bouteille.component.css'],
})
export class DetailBouteilleComponent implements OnInit {
  @Input()
  bouteille!: Bouteille;
  @Input()
  bouteilles: Bouteille[] | undefined;
  @Output()
  bouteilleChange = new EventEmitter<Bouteille>();

  ngOnInit(): void {}

  public precedente(): void {
    if (this.bouteilles) {
      const index = this.bouteilles.findIndex(
        (bouteille) => this.bouteille?.id === bouteille.id
      );
      const newIndex = index > 0 ? index - 1 : this.bouteilles.length - 1;
      this.bouteilleChange.emit(this.bouteilles[newIndex]);
    }
  }

  public suivante(): void {
    if (this.bouteilles) {
      const index = this.bouteilles.findIndex(
        (bouteille) => this.bouteille?.id === bouteille.id
      );
      const newIndex = index < this.bouteilles.length - 1 ? index + 1 : 0;
      this.bouteilleChange.emit(this.bouteilles[newIndex]);
    }
  }
}
