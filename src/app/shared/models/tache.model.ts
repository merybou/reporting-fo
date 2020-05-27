import { Utilisateur } from './utilisateur.model';
import { Sotp } from './sotp.model';

export interface Tache {
    id: number;
    nom: number;
    dateDebut: Date;
    dateFin: Date;
    ctp: number;
    collaborateurs: Utilisateur[];
    sotp: Sotp;
}
