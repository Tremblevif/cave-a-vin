import { NgModule, ViewChildren } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { DashboardComponent } from './layout/dashboard.component';
import { LoginComponent } from './login/login.component';
import { BouteillesParRegionComponent } from './main/bouteilles-par-region/bouteilles-par-region.component';
import { InfosCaveComponent } from './main/infos-cave/infos-cave.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  {
    path: 'bouteilles',
    component: DashboardComponent,
    children: [
      { path: 'info', component: InfosCaveComponent },
      { path: 'region/:id', component: BouteillesParRegionComponent },
    ],
  },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
