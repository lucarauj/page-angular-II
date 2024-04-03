import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CampeonatoService {
  key: string = 'test_d49b742b5ca2fd387fe5b7c904f389';

  constructor(private httpClient: HttpClient) { }

  getTabelaSerieA(): Observable<any> {

    const headers = new HttpHeaders({
      "Authorization": `Bearer ${this.key}`
    });
  
    const requestOptions = { headers: headers };

    return this.httpClient.get<any>('https://api.api-futebol.com.br/v1/campeonatos/10/tabela', requestOptions);
  }
}
