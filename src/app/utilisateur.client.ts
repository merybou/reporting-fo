import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Utilisateur } from './shared/models/utilisateur.model';

@Injectable({
    providedIn: 'root'
})
export class UtilisateurClient {

    apiURL = 'http://localhost:8080';

    constructor(private http: HttpClient) { }

    public envoyerUtilisateurs(utilisateur: Utilisateur): Observable<Utilisateur> {
        return this.http.post<Utilisateur>(this.apiURL + '/utilisateur', utilisateur);
    }
}