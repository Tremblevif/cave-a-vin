import { NgModule } from '@angular/core';
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
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
