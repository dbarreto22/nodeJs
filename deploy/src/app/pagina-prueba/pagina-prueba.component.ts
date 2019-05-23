import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-pagina-prueba',
  templateUrl: './pagina-prueba.component.html',
  styleUrls: ['./pagina-prueba.component.scss']
})
export class PaginaPruebaComponent implements OnInit {

  respuesta : Observable<any>
  mostrar :string;
  constructor(private apiservice :ApiService) { }

  ngOnInit() {
    this.respuesta = this.apiservice.prueba();
    if (this.respuesta != null){
      this.mostrar = "vino algo";
    }
  }

}
  
   /* "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"*/