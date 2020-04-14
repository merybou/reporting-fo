import { Injectable } from '@angular/core';
import { Personne } from './personne.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonneClient {

  apiURL = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  public recupererPersonne(): Observable<Personne> {
    return this.http.get<Personne>(this.apiURL + '/personne');
  }
}
