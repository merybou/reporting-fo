import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { Tache } from 'src/app/shared/models/tache.model';

@Injectable()
export class AuthentificationService {
    public verif = false;
    private url = 'http://localhost:8080/taches';

    constructor(private http: HttpClient, private route: Router) { }

    public connection(url, data) {

        this.http.post(url, data).subscribe(res => {

            if (res) {
                this.route.navigateByUrl('projet');
            } else {
                this.route.navigateByUrl('connection');
                this.verif = true;
            }
        });
    }
    public delete(tache: Tache) {
    }

    public update(tache: Tache) {
        this.http.put(this.url, tache);
    }
}