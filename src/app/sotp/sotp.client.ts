import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Projet } from '../shared/models/projet.model';
import { Observable } from 'rxjs';
import { Sotp } from '../shared/models/sotp.model';

@Injectable({
    providedIn: 'root'
})
export class SotpClient {

    static readonly URL_API = 'http://localhost:8080';

    constructor(private http: HttpClient) { }

    public recupererSotpParNumeroProjet(numeroProjet: number): Observable<Sotp[]> {
        return this.http.get<Sotp[]>(SotpClient.URL_API + '/sotps?numeroProjet=' + numeroProjet);
    }
}