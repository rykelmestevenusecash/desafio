import { Http } from "@angular/http";
import { api } from "src/app.api";
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Campanha } from "../domain/campanha.model";
import { take } from 'rxjs/operators'

@Injectable()
export class ProdutosService {

  constructor(private http: Http) { }

  POST(item:any): Observable<any>{
    return this.http.post(`${api}/listaProdutos`, item).pipe(take(1))
  }

  GETByID(id:any): Observable<any>{
    return this.http.get(`${api}/listaProdutos/${id}`).pipe(take(1))
  }
  GET(endpoint:string, search?: string): Observable<any>{
    return this.http.get(`${api}/${endpoint}`, {params: {q: search}}).pipe(take(1))
  }
  PUT(id: any,item: any, endpoint: string) {
    return this.http.put(`${api}/${endpoint}/${id}`, item).pipe(take(1))
  }
}
