import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AideComponent } from './aide/aide.component';
import { NavHomeComponent } from './nav-home/nav-home.component';
import { FooterHomeComponent } from './footer-home/footer-home.component';
import { ContactComponent } from './contact/contact.component';
import { EspaceEntrepriseComponent } from './espace-entreprise/espace-entreprise.component';
import { MicroCrecheComponent } from './micro-creche/micro-creche.component';
import { AlbumComponent } from './album/album.component';
import { RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { BannerComponent } from './banner/banner.component';
import { CarouselNavigationComponent } from './carousel-navigation/carousel-navigation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AideComponent,
    NavHomeComponent,
    FooterHomeComponent,
    ContactComponent,
    EspaceEntrepriseComponent,
    MicroCrecheComponent,
    AlbumComponent,
    AccueilComponent,
    BannerComponent,
  ],  
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselNavigationComponent,
    RouterModule.forRoot([
      {path: 'accueil-component', component: AccueilComponent},
      {path: 'album-component', component: AppComponent},
    ]),
    NgbModule,
  ],
  exports: [CarouselNavigationComponent],
  providers: [CarouselNavigationComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
