import { Component, OnInit } from '@angular/core';
import { BannerService } from '../banner.service';

@Component({
  selector: 'app-nav-home',
  templateUrl: './nav-home.component.html',
  styleUrls: ['./nav-home.component.css']
})

export class NavHomeComponent implements OnInit {
  titles : string[] = [
        "Bienvenue chez les Petits Globetrotters !",
        "Les Petits Globetrotters  en images",
        "Contactez Les Petits Globetrotters"
  ]; 

  descriptions : string[] = [
    "La micro-crèche Les Petits Globetrotters est une structure privée qui peut accueillir 12 enfants simultanément (âgés de 2.5 mois à 4 ans) du lundi ou vendredi de 7h15 à 18h45. Les enfants des Sorinières mais également des autres communes seront les bienvenus ! ",
    "Travaux de construction bien entamés depuis la fin 2022, vous pouvez suivre les avancements des travaux au fil de l'eau",
    "Formulaire de contact pour toute question, demande d’information ou demande de pré-inscription"
  ];

  uris : string[] = [
    "/#decouvrirLink",
    "album-component#travauxImages",
    "contact-component#contact-form"
  ] 

  uriDescs : string[] = [
    "Continuer la lecture...",
    "Consulter",
    "Contacter"
  ];


  constructor(public bannerService: BannerService) {
  }

  
  ngOnInit(): void {
    this.bannerService.getTitle();
    console.info( "this.bannerService.getTitle() = " + this.bannerService.getTitle());
  }

  /**
   * updateBannerByOutletIndex
   * 0) home page
   * 1) album page
   * @param outletIndexPage 
   */
  updateBannerByOutletIndex(outletIndexPage : number) {
    this.updateTitle(outletIndexPage);
    this.updateDescription(outletIndexPage);
    this.updateUri(outletIndexPage);
    this.updateUriDesc(outletIndexPage);
  }

  updateTitle(param : number) {
    console.debug("[Nav-home] updateTitle(" + param +")");
    this.bannerService.setTitle(this.titles[param])
  }

  updateDescription(param : number) {
    console.debug("[Nav-home] updateDescription(" + param +")");
    this.bannerService.setDescription(this.descriptions[param])
  }

  updateUri(param : number) {
    console.debug("[Nav-home] updateUri(" + param +")");
    this.bannerService.setUri(this.uris[param])
  }

  updateUriDesc(param : number) {
    console.debug("[Nav-home] updateUriDesc(" + param +")");
    this.bannerService.setUriDesc(this.uriDescs[param])
  }
}
