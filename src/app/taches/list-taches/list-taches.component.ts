import { Component } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import { TacheClient } from '../tache.client';
import { SOTP_STUB } from 'src/app/shared/models/stubs.model';
import { Tache } from 'src/app/shared/models/tache.model';

@Component({
  selector: 'app-list-taches',
  templateUrl: './list-taches.component.html',
  styleUrls: ['./list-taches.component.css']
})
export class ListTachesComponent {
  dataSource: any;

  constructor(private tacheClient: TacheClient) {
    this.dataSource = new CustomStore({
      key: 'id',
      loadMode: 'raw',
      load: () => this.tacheClient.recupererTaches().toPromise().catch(e => {
        throw e && e.error && e.error.Message;
      }),
      insert: (values) => {
        const tache: Tache = {
          id: null,
          nom: values.nom,
          dateDebut: values.dateDebut,
          dateFin: values.dateFin,
          ctp: values.ctp,
          collaborateurs: values.collaborateurs,
          sotp: SOTP_STUB
        };
        return this.tacheClient.creerTache(tache).toPromise().catch(e => {
          throw e && e.error && e.error.Message;
        });
      },
      update: (key, values) => { // values = éléments modifiés
        const tache: Tache = this.dataSource.__rawData.find((ligneTableau) => ligneTableau.id === key); // fonction lambda
        const tacheMiseAJour: Tache = {
          id: key,
          nom: values.nom ? values.nom : tache.nom, // condition ternaire
          dateDebut: values.dateDebut ? values.dateDebut : tache.dateDebut,
          dateFin: values.dateFin ? values.dateFin : tache.dateFin,
          ctp: values.ctp ? values.ctp : tache.ctp,
          collaborateurs: values.collaborateurs ? values.collaborateurs : tache.collaborateurs,
          sotp: SOTP_STUB
        };
        return this.tacheClient.mettreAJourTache(tacheMiseAJour).toPromise().catch(e => {
          throw e && e.error && e.error.Message;
        });
      },
      remove: (key) => this.tacheClient.supprimerTache(key).toPromise().catch(e => {
        throw e && e.error && e.error.Message;
      })
    });
  }
}
