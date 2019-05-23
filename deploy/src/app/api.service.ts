import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }




  prueba():Observable<any>{
    return this.http.get<any>('https://r179-27-99-70.ir-static.anteldata.net.uy:8443/FakeNews-web/RESTServices/prueba');
  }
}
