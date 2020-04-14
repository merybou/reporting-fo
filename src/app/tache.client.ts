import { Injectable } from '@angular/core';
import { Tache } from './tache.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class TacheClient {

    apiURL = 'http://localhost:8080';

    constructor(private http: HttpClient) { }

    public recupererTaches(): Observable<Tache[]> {
        return this.http.get<Tache[]>(this.apiURL + '/taches');
    }
}
