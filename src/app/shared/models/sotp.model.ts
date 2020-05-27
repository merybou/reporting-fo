import { Projet } from './projet.model';
import { Tache } from './tache.model';
import { Utilisateur } from './utilisateur.model';

export interface Sotp {
    numero: number;
    budget: number;
    dateCreation: Date;
    dateModification: Date;
    numSalesForce: number;
    projet: Projet;
    chefProjet: Utilisateur;
}
