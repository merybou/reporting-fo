import { Utilisateur } from './utilisateur.model';
import { Projet } from './projet.model';
import { Sotp } from './sotp.model';

export const CHEF_PROJET_NICOLAS: Utilisateur = {
    id: 1,
    nom: 'Ferré',
    prenom: 'Nicolas',
    motDePasse: '123',
    login: '',
    role: 'Chef de projet'
};

export const PROJET_STUB: Projet = {
    numero: 1,
    libelle: 'Outil reporting',
    client: 'CS Group',
    dateDebut: new Date('2020-03-01 00:00:00'),
    dateFin: new Date('2020-07-30 00:00:00'),
    chefProjet: CHEF_PROJET_NICOLAS,
};

export const SOTP_STUB: Sotp = {
    numero: 1,
    budget: 10000,
    dateCreation: new Date('2020-03-01 00:00:00'),
    dateModification: new Date('2020-04-13 00:00:00'),
    numSalesForce: 1,
    projet: PROJET_STUB,
    chefProjet: CHEF_PROJET_NICOLAS
};
