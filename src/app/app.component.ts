import { Component, OnInit } from '@angular/core';
import { PersonneClient } from './personne.client';
import { Personne } from './personne.model';
import { TacheClient } from './tache.client';
import { Tache } from './tache.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public personne: Personne;
  public message: string;
  public taches: Tache[];

  constructor(private personneClient: PersonneClient, private tacheClient: TacheClient) {
  }

  ngOnInit() {
    this.personneClient.recupererPersonne().subscribe(
      (personne) => this.personne = personne
    );

    this.tacheClient.recupererTaches().subscribe(
      (res) => this.taches = res
    );
  }

  onClickSurBouton() {
    this.message = 'test';
  }
}
