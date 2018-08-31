import { Component } from '@angular/core';
import { Actualite } from '../model/Actualite';

@Component({
        templateUrl: 'actu.component.html',
        styleUrls: [ 'actu.component.css'],
    })
export class ActuComponent {

  actuTab: Actualite[];
  constructor() {
    const actuTest = new Actualite;
    actuTest.titre = 'Test affichage titre Article';
    actuTest.contenu = 'contenu';
    this.actuTab = [actuTest];
  }
}
