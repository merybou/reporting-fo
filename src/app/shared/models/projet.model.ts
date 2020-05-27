import { Utilisateur } from './utilisateur.model';

export interface Projet {
    numero: number;
    libelle: string;
    client: string;
    dateDebut: Date;
    dateFin: Date;
    chefProjet: Utilisateur;
}
