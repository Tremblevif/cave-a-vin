import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../domain/services';

@Component({
  selector: 'cra-login',
  templateUrl: './login.html',
  styleUrls: ['./css/cave.css', './css/animate-custom.css', './css/style.css'],
})
export class LoginComponent {
  title = 'cave-a-vin';

  constructor(private sessionService: SessionService, private router: Router) {}

  connexion(nom: string, prenom: string): void {
    this.sessionService.login(prenom, nom);
    console.log(`${nom} ${prenom}`);
    this.router.navigate(['accueil']);
  }

  // Code simpliste, le filtrage de saisie est un problème complexe
  // (touches spéciales, copier/coller, etc)
  public filtreLettres(event: KeyboardEvent): void {
    // Autorisation de touches comme backspace ou tab
    if (event.keyCode <= 20) {
      return;
    }
    // Astuce JS pour détecter les lettres
    const char = String.fromCharCode(event.which);
    if (char.toLowerCase() === char.toUpperCase()) {
      event.preventDefault();
    }
  }
}
