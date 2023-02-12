import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  title : string | undefined;
  description : string | undefined;
  uri : string | undefined;
  uriDesc : string | undefined;

  constructor() {
    this.title ="Bienvenue chez les Petits Globetrotters !";
    this.description = "La micro-crèche Les Petits Globetrotters est une structure privée qui peut accueillir 12 enfants simultanément (âgés de 2.5 mois à 4 ans) du lundi ou vendredi de 7h15 à 18h45. " + 
    " Les enfants des Sorinières mais également des autres communes seront les bienvenus !";
    this.uri = "/#decouvrirLink";
    this.uriDesc = "Continuer la lecture...";
   }

  public getTitle() {
    return this.title;
  }

  public setTitle(titleParam : string) {
    this.title = titleParam;
  }

  public getDescription() {
    return this.description;
  }

  public setDescription(descriptionParam : string) {
    this.description = descriptionParam;
  }

  public getUri() {
    return this.uri;
  }

  public setUri(uriParam : string) {
    this.uri = uriParam;
  }

  public getUriDesc() {
    return this.uriDesc;
  }

  public setUriDesc(uriDescParam : string) {
    this.uriDesc = uriDescParam;
  }
}
