import { Component, Input, OnInit } from '@angular/core';
import { Commentaire } from 'src/app/domain/model';
import { SESSION } from 'src/app/domain/services';

@Component({
  selector: 'cra-commentaire-bouteille',
  templateUrl: './commentaire-bouteille.component.html',
  styleUrls: ['./commentaire-bouteille.component.css']
})
export class CommentaireBouteilleComponent implements OnInit {
  @Input()
  commentaire:Commentaire|undefined;

  ngOnInit(): void {}

}
