import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutService } from 'src/services/about.service';
import { TachesComponent } from './taches/taches.component';
import { RouterModule, Routes } from '@angular/router';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { ConnectionComponent } from './connection/connection.component';
import { AuthentificationService } from 'src/services/authentification.services';
import { ListTachesComponent } from './taches/list-taches/list-taches.component';
import { DxDataGridModule, DxSelectBoxModule } from 'devextreme-angular';
import { ListProjetsComponent } from './projets/list-projet/list-projets.component';
import { ProjetsComponent } from './projets/projets.component';


const appRoutes: Routes = [
  { path: 'taches', component: TachesComponent },
  { path: 'utilisateur', component: UtilisateurComponent },
  { path: 'connection', component: ConnectionComponent },
  { path: 'projet', component: ProjetsComponent },
  {
    path: '',
    redirectTo: '/connection',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    TachesComponent,
    UtilisateurComponent,
    ConnectionComponent,
    ListTachesComponent,
    ListProjetsComponent,
    ProjetsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    DxDataGridModule,
    DxSelectBoxModule,
    ReactiveFormsModule
  ],
  providers: [AboutService, AuthentificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
