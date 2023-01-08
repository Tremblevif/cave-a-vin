import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegionViticole } from 'src/app/domain/model';
import { CaveAVinService } from 'src/app/domain/services';

@Component({
  selector: 'cra-menu-regions',
  template: `
    <div class="list-group">
      <a
        class="list-group-item"
        *ngFor="let region of regions"
        [routerLink]="['/region/' + region.id]"
      >
        {{ region.nom }}
      </a>
    </div>
  `,
})
export class MenuRegionsComponent {
  public regions: RegionViticole[];
  public activeRegion?: RegionViticole;

  constructor(private caveAVin: CaveAVinService, private router: Router) {
    this.regions = this.caveAVin.gestionVins.findAllRegions();
  }
}
