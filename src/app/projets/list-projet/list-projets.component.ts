import { Component } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import { ProjetClient } from 'src/app/projets/list-projet/list-projet.client';
import { CHEF_PROJET_NICOLAS } from 'src/app/shared/models/stubs.model';
import { Projet } from 'src/app/shared/models/projet.model';

@Component({
  selector: 'app-list-projet',
  templateUrl: './list-projet.component.html',
  styleUrls: ['./list-projet.component.css']
})
export class ListProjetsComponent {
  dataSource: any;

  constructor(private projetClient: ProjetClient) {
    this.dataSource = new CustomStore({
      key: 'numero',
      loadMode: 'raw',
      load: () => this.projetClient.recupererProjets().toPromise()
        .catch(e => {
          throw e && e.error && e.error.Message;
        }),
      insert: (values) => {
        const projet: Projet = {
          numero: values.numero,
          libelle: values.libelle,
          client: values.client,
          dateDebut: values.dateDebut,
          dateFin: values.dateFin,
          chefProjet: CHEF_PROJET_NICOLAS,
        };
        return this.projetClient.creerProjet(projet).toPromise().catch(e => {
          throw e && e.error && e.error.Message;
        });
      },
      update: (key, values) => { // values = éléments modifiés
        const projet: Projet = this.dataSource.__rawData.find((ligneTableau) => ligneTableau.numero === key); // fonction lambda
        const projetMiseAJour: Projet = {
          numero: key,
          libelle: values.libelle ? values.libelle : projet.libelle,
          client: values.client ? values.client : projet.client,
          dateDebut: values.dateDebut ? values.dateDebut : projet.dateDebut,
          dateFin: values.dateFin ? values.dateFin : projet.dateFin,
          chefProjet: projet.chefProjet
        };
        return this.projetClient.mettreAJourProjet(projetMiseAJour).toPromise().catch(e => {
          throw e && e.error && e.error.Message;
        });
      },
      remove: (key) => this.projetClient.supprimerProjet(key).toPromise().catch(e => {
        throw e && e.error && e.error.Message;
      })
    });
  }
}
