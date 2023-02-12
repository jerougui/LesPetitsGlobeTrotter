import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AlbumComponent } from './album/album.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'accueil-component', component: AccueilComponent, data: {title: 'Album title', description : ' here description album'}},
  { path: 'album-component', component: AlbumComponent , data: {title: 'Album title', description : ' here description album'}}
];

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  // ...any other options you'd like to use
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
