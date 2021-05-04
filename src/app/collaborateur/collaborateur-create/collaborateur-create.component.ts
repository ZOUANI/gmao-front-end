import { Collaborateur } from './../../controller/model/collaborateur.model';
import { CollaborateurService } from './../../controller/service/collaborateur.service';
import { MembreEquipe } from './../../controller/model/membre-equipe.model';
import { EquipesService } from './../../controller/service/equipes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collaborateur-create',
  templateUrl: './collaborateur-create.component.html',
  styleUrls: ['./collaborateur-create.component.css'],
})
export class CollaborateurCreateComponent implements OnInit {
  constructor(private collaborateurService: CollaborateurService) {}

  get collaborateur(): Collaborateur {
    return this.collaborateurService.collaborateur;
  }

  get collaborateurs(): Array<Collaborateur> {
    return this.collaborateurService.collaborateurs;
  }

  // public addMembres() {
  //   this.equipesService.addMembres();
  // }

  // get membre(): MembreEquipe {
  //   return this.equipesService.membre;
  // }

  ngOnInit(): void {}
}