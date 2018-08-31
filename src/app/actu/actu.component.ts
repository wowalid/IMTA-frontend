import { Component } from '@angular/core';
import { Actualite } from '../model/Actualite';

@Component({
        templateUrl: 'actu.component.html',
        styleUrls: [ 'actu.component.css'],
    })
export class ActuComponent {
  content: String;
  accountAdmin = true;
  actuTab: Actualite[];
  titre: String;
  actuSubmitted = false;
  constructor() {
    const actuTest = new Actualite;
    actuTest.titre = 'Test affichage titre Article';
    actuTest.contenu = 'contenu';
    this.actuTab = [actuTest];
  }
}
