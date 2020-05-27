import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Projet } from 'src/app/shared/models/projet.model';


@Injectable({
    providedIn: 'root'
})
export class ProjetClient {

    static readonly URL_API = 'http://localhost:8080';

    constructor(private http: HttpClient) { }

    public recupererProjets(): Observable<Projet[]> {
        return this.http.get<Projet[]>(ProjetClient.URL_API + '/projet');
    }

    public creerProjet(projet: Projet): Observable<Projet> {
        return this.http.post<Projet>(ProjetClient.URL_API + '/projet', projet); // 2 paramètres d'entrées pour PUT et POST
    }

    public mettreAJourProjet(projet: Projet): Observable<Projet> {
        return this.http.put<Projet>(ProjetClient.URL_API + '/projet', projet);
    }

    public supprimerProjet(numeroProjet: number): Observable<any> {
        return this.http.delete(`${ProjetClient.URL_API}/projet/${numeroProjet}`);
    }
}
