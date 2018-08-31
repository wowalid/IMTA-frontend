import { Component } from '@angular/core';
import { Actualite } from '../model/Actualite';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActuService } from '../actu.service'
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
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
  auteur = "wawa";
  date: any = new Date();
  actuPost= new Actualite;
  constructor(private actuService: ActuService) {
    const actuTest = new Actualite;
    actuTest.titre = 'Test affichage titre Article';
    actuTest.contenu = 'contenu';
    this.actuTab = [actuTest];

  }

  submit(){
    if (this.titre.length>0 && this.content.length>0){
      this.actuPost.auteur = this.auteur
      this.actuPost.contenu = this.content
      this.actuPost.date = this.date
      this.actuPost = this.date
      this.actuService.postActu(this.actuPost).then(res=>{this.actuSubmitted=true})
    }
  }

  getAllArticles(){

  }

  postArticle(){
    
  }
}
