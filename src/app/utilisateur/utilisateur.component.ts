import { Component, OnInit } from '@angular/core';
import { UtilisateurClient } from '../utilisateur.client';
import CryptoJS from 'crypto-js';
import { Utilisateur } from '../shared/models/utilisateur.model';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {

  public utilisateur: Utilisateur = {
    id: null,
    nom: '',
    prenom: '',
    motDePasse: '',
    login: '',
    role: ''
  };
  mode = 1;
  motDePasseAConfirmer = '';
  mdpNonSimilaires: boolean;

  constructor(private utilisateurClient: UtilisateurClient) { }

  ngOnInit() { }

  saveContact() {
    if (this.utilisateur.motDePasse !== this.motDePasseAConfirmer) {
      this.mdpNonSimilaires = true;
    } else {
      const encryptWithAES = text => {
        const passphrase = '123';
        return CryptoJS.AES.encrypt(text, passphrase).toString();
      };

      const mdpChiffre = encryptWithAES(this.utilisateur.motDePasse);
      this.utilisateur.motDePasse = mdpChiffre;

      this.utilisateurClient.envoyerUtilisateurs(this.utilisateur).subscribe(
        (res) => {
          this.utilisateur = res;
          this.mode = 2;
        }
      );
    }
  }
}
