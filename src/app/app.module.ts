import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './layout/dashboard.component';
import { UserButtonComponent } from './header/user-button/user-button.component';
import { InfosCaveComponent } from './main/infos-cave/infos-cave.component';
import { DetailBouteilleComponent } from './main/detail-bouteille/detail-bouteille.component';
import { CommentaireBouteilleComponent } from './main/commentaire-bouteille/commentaire-bouteille.component';
import { ListeBouteillesComponent } from './main/liste-bouteilles/liste-bouteilles.component';
import { FormsModule } from '@angular/forms';
import { RatingComponent } from './main/rating/rating.component';
import { CaveAVinService, SessionService } from './domain/services';
import {
  CurrencyPipe,
  formatCurrency,
  registerLocaleData,
} from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuRegionsComponent } from './sidebar/menu-regions/menu-regions.component';
import { BouteillesParRegionComponent } from './main/bouteilles-par-region/bouteilles-par-region.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    MainComponent,
    SidebarComponent,
    DashboardComponent,
    UserButtonComponent,
    InfosCaveComponent,
    DetailBouteilleComponent,
    CommentaireBouteilleComponent,
    ListeBouteillesComponent,
    RatingComponent,
    AccueilComponent,
    MenuRegionsComponent,
    BouteillesParRegionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    SessionService,
    CaveAVinService,
    { provide: LOCALE_ID, useValue: 'fr-FR' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    registerLocaleData(localeFr);
    formatCurrency;
  }
}
