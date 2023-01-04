import { Component, Input, OnInit } from '@angular/core';
import { Commentaire } from 'src/app/domain/model';

@Component({
  selector: 'cra-commentaire-bouteille',
  templateUrl: './commentaire-bouteille.component.html',
  styleUrls: ['./commentaire-bouteille.component.css'],
})
export class CommentaireBouteilleComponent {
  @Input()
  commentaire!: Commentaire;
}
