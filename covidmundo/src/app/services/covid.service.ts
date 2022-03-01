import { Covid, Pessoa } from './covid.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidService {
  url = "https://covid19-brazil-api.now.sh/api/report/v1";
  cadastroUrl = "http://localhost:3001/pessoas";

  constructor(private http : HttpClient) { }
  read():Observable<{data:Covid[]}>{
    return this.http.get<{data:Covid[]}>(this.url)
  }

  cadastro(pessoa:Pessoa): Observable<Pessoa>{
    return this.http.post<Pessoa>(this.cadastroUrl, pessoa)
  }

}
