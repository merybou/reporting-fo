import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/services/authentification.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

  public  mode : boolean;

  constructor(private authentificationService: AuthentificationService, private route: Router ) { }

  ngOnInit(): void {
  }

  onconection(data:any){
    this.authentificationService.connection('http://localhost:8080/connection',data);
    this.mode=this.authentificationService.verif;
  }
  inscrire(){
      this.route.navigateByUrl('utilisateur');

  }
}
