import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Tache } from '../shared/models/tache.model';

@Injectable({
    providedIn: 'root'
})
export class TacheClient {

    static readonly URL_API = 'http://localhost:8080';

    constructor(private http: HttpClient) { }

    public recupererTaches(): Observable<Tache[]> {
        return this.http.get<Tache[]>(TacheClient.URL_API + '/taches');
    }

    public creerTache(tache: Tache): Observable<Tache> {
        return this.http.post<Tache>(TacheClient.URL_API + '/tache', tache); // 2 paramètres d'entrées pour PUT et POST
    }

    public mettreAJourTache(tache: Tache): Observable<Tache> {
        return this.http.put<Tache>(TacheClient.URL_API + '/tache', tache);
    }

    public supprimerTache(idTache: number): Observable<any> {
        return this.http.delete(`${TacheClient.URL_API}/tache/${idTache}`);
    }
}
