import { Component, OnInit } from '@angular/core';
import { TacheClient } from './tache.client';
import { Tache } from '../shared/models/tache.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Projet } from '../shared/models/projet.model';
import { ProjetClient } from '../projets/list-projet/list-projet.client';
import { Sotp } from '../shared/models/sotp.model';
import { SotpClient } from '../sotp/sotp.client';


@Component({
  selector: 'app-taches',
  templateUrl: './taches.component.html',
  styleUrls: ['./taches.component.css']
})
export class TachesComponent implements OnInit {
  formulaire: FormGroup;
  public taches: Tache[];
  projets: Projet[];
  sotps: Sotp[];

  constructor(private tacheClient: TacheClient,
              private formBuilder: FormBuilder,
              private projetClient: ProjetClient,
              private sotpClient: SotpClient) { }

  ngOnInit() {
    this.formulaire = this.formBuilder.group({
      listeDeroulanteProjets: '',
      listeDeroulanteSotps: ''
    });

    this.projetClient.recupererProjets().subscribe(
      projets => this.projets = projets
    );

    this.tacheClient.recupererTaches().subscribe(
      (resultat) => this.taches = resultat
    );
  }

  public onChangeProjet() {
    const projetSelectionne: Projet = this.formulaire.controls.listeDeroulanteProjets.value;
    this.sotpClient.recupererSotpParNumeroProjet(projetSelectionne.numero).subscribe(
      sotps => {
        this.sotps = sotps;
        console.log(sotps);
      }
    );
  }
}
