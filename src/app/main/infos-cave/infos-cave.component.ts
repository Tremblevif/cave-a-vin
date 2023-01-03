import { Component, EventEmitter, OnInit } from '@angular/core';
import { Bouteille, Cave, Utilisateur } from 'src/app/domain/model';
import { SESSION } from 'src/app/domain/services';

@Component({
  selector: 'cra-infos-cave',
  templateUrl: './infos-cave.component.html',
  styleUrls: ['./infos-cave.component.css']
})
export class InfosCaveComponent implements OnInit {
  utilisateur:Utilisateur|undefined;
  cave:Cave|undefined;
  bue!:Bouteille;
  isDetailVisible:boolean = false;
  bues!:Bouteille[];

  ngOnInit(): void {
    this.utilisateur=SESSION.user
    this.cave=this.utilisateur?.cave;
    this.bues=this.cave?.dernieresBouteillesBues() ?? [];
    this.bue=this.bues[0];
  }

  changeVisibility () {
    this.isDetailVisible =! this.isDetailVisible;
  }

  changeSelectedBottle (selectedBottle:Bouteille){
    this.bue=selectedBottle;
  }
}