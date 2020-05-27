import { CHEF_PROJET_NICOLAS, SOTP_STUB } from '../models/stubs.model';
import { Projet } from '../models/projet.model';

export const PROJET_STUB: Projet = {
    numero: 1,
    libelle: 'Outil reporting',
    client: 'CS Group',
    dateDebut: new Date('2020-03-01 00:00:00'),
    dateFin: new Date('2020-07-30 00:00:00'),
    chefProjet: CHEF_PROJET_NICOLAS,
};
