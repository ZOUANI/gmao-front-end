import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { ChefEquipeComponent } from './chef-equipe/chef-equipe.component';
import { CollaborateurComponent } from './collaborateur/collaborateur.component';
import { AdministrateurComponent } from './administrateur/administrateur.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const componenets = [
  ChefEquipeComponent,
  CollaborateurComponent,
  AdministrateurComponent,
  HomeComponent,
  PageNotfoundComponent
];

const routes: Routes = [
  // {path: '', component: componenets[3]},
  {path: 'home',component: componenets[3]},
  {path: 'admin', component: componenets[2]},
  {path: 'collaborateur',component: componenets[1]},
  {path: 'chef-equipe', component: componenets[0]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
